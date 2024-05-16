import React, { useLayoutEffect } from 'react'
import { View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles'
import Spinner from '../../../components/Spinner/Spinner'
import TextDefault from '../../../components/Text/TextDefault/TextDefault'
import { alignment } from '../../../utils/alignment'
import screenOptions from '../screenOptions'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useForgotPasswordOtp } from './useForgotPasswordOtp'
import {useTranslation} from 'react-i18next'


function ForgotPasswordOtp(props) {
  const {
    otp,
    setOtp,
    otpError,
    seconds,
    currentTheme,
    loading,
    onCodeFilled,
    themeContext,
    resendOtp
  } = useForgotPasswordOtp()

    const {t} = useTranslation()
  useLayoutEffect(() => {
    props.navigation.setOptions(
      screenOptions({
        iconColor: currentTheme.iconColorPink,
        backColor: currentTheme.themeBackground,
        fontColor: currentTheme.fontMainColor,
        navigation: props.navigation
      })
    )
  }, [props.navigation])

  return (
    <SafeAreaView style={styles(currentTheme).safeAreaViewStyles}>
      <StatusBar
        backgroundColor={currentTheme.buttonText}
        barStyle={
          themeContext.ThemeValue === 'Dark' ? 'light-content' : 'dark-content'
        }
      />
      <View style={styles(currentTheme).mainContainer}>
        <View style={styles().subContainer}>
          <View style={styles().logoContainer}>
            <Image
              source={require('../../../../assets/login-icon.png')}
              style={styles().logoContainer}
            />
          </View>
          <View>
            <TextDefault
              H3
              bolder
              textColor={currentTheme.fontSecondColor}
              style={{
                textAlign: 'center',
                ...alignment.MTlarge,
                ...alignment.MBmedium
              }}>
              {t('forgotPassword')}
            </TextDefault>
            <TextDefault
              H5
              bold
              textColor={currentTheme.fontSecondColor}
              style={{
                textAlign: 'center'
              }}>
              {t('otpSentToEmail')}
            </TextDefault>
          </View>
          <View>
            <OTPInputView
              pinCount={6}
              style={styles().otpInput}
              codeInputFieldStyle={[
                styles(currentTheme).otpBox,
                otpError && styles(currentTheme).errorInput
              ]}
              codeInputHighlightStyle={{
                borderColor: currentTheme.iconColorPink
              }}
              autoFocusOnLoad
              code={otp}
              onCodeChanged={code => setOtp(code)}
              onCodeFilled={code => {
                onCodeFilled(code)
              }}
              editable
            />
            {otpError && (
              <TextDefault
                style={styles().error}
                bold
                textColor={currentTheme.textErrorColor}>
                {t('wrongOtp')}
              </TextDefault>
            )}
          </View>
          <View style={{ ...alignment.MTlarge }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles().btn,
                seconds !== 0 && styles(currentTheme).disabledBtn
              ]}
              disabled={seconds !== 0}
              onPress={() => resendOtp()}>
              <TextDefault
                H4
                textColor={currentTheme.buttonTextPink}
                style={alignment.MLsmall}
                bold>
                {loading ? (
                  <Spinner backColor="transparent" size="small" />
                ) : (
                  t('resendBtn')
                )}
              </TextDefault>
            </TouchableOpacity>
          </View>
          <View style={alignment.MBxSmall}>
            <TextDefault center H4 bold style={alignment.MTsmall}>
              {seconds !== 0 ? `Retry after ${seconds}s` : ''}
            </TextDefault>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default ForgotPasswordOtp
