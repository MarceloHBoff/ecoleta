import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Main,
  Title,
  Description,
  Input,
  Button,
  ButtonIcon,
  ButtonText,
} from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
      >
        <Main>
          <Image source={require('../../assets/logo.png')} />
          <Title>Seu marketplace de coleta de residuos</Title>
          <Description>
            Ajudamos pessoas a encontratem pontos de coleta de forma eficiente
          </Description>
        </Main>

        <View>
          <Input
            placeholder="Digite a UF"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf}
            onChangeText={setUf}
          />
          <Input
            placeholder="Digite a cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
          />

          <Button onPress={() => navigation.navigate('Points', { uf, city })}>
            <ButtonIcon>
              <Feather name="arrow-right" color="#fff" size={24} />
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
