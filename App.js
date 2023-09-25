import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0);
  const onPress = () => setValor(1);
  const onPress2 = () => setValor(0);
  const onPress3 = () => setValor('p1');
  const onPressp2 = () => setValor('p2');
  const onPressp3 = () => setValor('p3');
  const onPresslog = () => setValor('log');

  const [correo, setCorreo] = useState('asd');

  const data = [
    { Fecha: 'Enero 2023', Actividad: 'Reunión con el Consejo Comunitario de la Comunidad Negra de Alto Guapi para discutir el plan de acción para el año.' },
    { Fecha: 'Febrero 2023', Actividad: 'Capacitación en técnicas de monitoreo y control de la deforestación para los miembros del Consejo Comunitario.' },
    { Fecha: 'Marzo 2023', Actividad: 'Implementación de un sistema de monitoreo y control de la deforestación en el área del proyecto.' },
    { Fecha: 'Abril 2023', Actividad: 'Evaluación del impacto del sistema de monitoreo y control en la reducción de la deforestación.' },
    { Fecha: 'Mayo 2023', Actividad: 'Desarrollo de actividades educativas y de sensibilización para la comunidad local sobre la importancia de la conservación del bosque.' },
    { Fecha: 'Junio 2023', Actividad: 'Reunión con representantes del gobierno local y regional para discutir el apoyo al proyecto.' },
    { Fecha: 'Julio 2023', Actividad: 'Implementación de proyectos alternativos sostenibles para generar ingresos para la comunidad local.' },
    { Fecha: 'Agosto 2023', Actividad: 'Evaluación del impacto de los proyectos alternativos sostenibles en la reducción de la deforestación.' },
    { Fecha: 'Septiembre 2023', Actividad: 'Desarrollo de un plan de acción para el próximo año basado en los resultados obtenidos.' },
    { Fecha: 'Octubre 2023', Actividad: 'Presentación del plan de acción a la comunidad local y al Consejo Comunitario para su aprobación.' },
    { Fecha: 'Noviembre 2023', Actividad: 'Implementación del plan de acción aprobado.' },
    { Fecha: 'Diciembre 2023', Actividad: 'Evaluación del impacto del proyecto en el año y planificación para el próximo año.' }
  ];

  const data2 = [
    { fecha: '1 de septiembre de 2023', actividad: 'Reunión con líderes indígenas para discutir la implementación del proyecto' },
    { fecha: '15 de septiembre de 2023', actividad: 'Inicio de la capacitación en gobernanza forestal y emprendimiento' },
    { fecha: '1 de octubre de 2023', actividad: 'Inicio de la reforestación y monitoreo comunitario' },
    { fecha: '15 de octubre de 2023', actividad: 'Implementación de energías renovables en las comunidades' },
    { fecha: '1 de noviembre de 2023', actividad: 'Mejora de la infraestructura en comunicaciones, movilidad, salud y recreación' },
    { fecha: '15 de noviembre de 2023', actividad: 'Tecnificación de procesos productivos para autoabastecimiento y comercialización' },
    { fecha: '1 de diciembre de 2023', actividad: 'Incorporación de la sostenibilidad en el uso de sistemas silvopastoriles, pesca y productos forestales no maderables' }
  ];

  const data3 = [
    { Fecha: 'Enero 2023', Actividad: 'Obtener el CPLI de las comunidades indígenas' },
    { Fecha: 'Febrero 2024', Actividad: 'Realizar el DSEP para identificar las causas y agentes de la deforestación y la degradación forestal' },
    { Fecha: 'Marzo 2024', Actividad: 'Establecer la LBR para determinar el nivel de emisiones históricas y proyectadas sin el proyecto' },
    { Fecha: 'Abril 2024', Actividad: 'Definir el APF para delimitar el alcance geográfico del proyecto y evitar el desplazamiento de las actividades que generan emisiones' },
    { Fecha: 'Mayo 2024', Actividad: 'Seleccionar el EC que se utilizará para validar y verificar el proyecto' },
    { Fecha: 'Junio 2025', Actividad: 'Elaborar la DGP, con la información básica sobre el contexto, los objetivos, las actividades, los actores, los riesgos y las salvaguardas del proyecto' },
    { Fecha: 'Julio 2025', Actividad: 'Elaborar la ERE, con la metodología utilizada para calcular las emisiones evitadas por el proyecto' },
    { Fecha: 'Agosto 2025', Actividad: 'Elaborar el PMFC, con las estrategias y acciones para mejorar el manejo y uso sostenible de los recursos forestales por parte de las comunidades indígenas' },
    { Fecha: 'Septiembre 2025', Actividad: 'Elaborar el PMV, con los indicadores, métodos, frecuencia y responsables para medir y reportar el desempeño del proyecto' },
    { Fecha: 'Octubre 2025', Actividad: 'Elaborar el PF, con el presupuesto estimado del proyecto, las fuentes de financiación, los mecanismos de distribución de beneficios y los arreglos contractuales entre las partes interesadas' },
    { Fecha: 'Noviembre 2026 - Octubre 2030', Actividad: 'Implementar el PMFC, mediante la realización de talleres, capacitaciones, asistencias técnicas, dotaciones, obras y servicios para mejorar el manejo forestal comunitario' },
    { Fecha: 'Noviembre 2026 - Octubre 2030', Actividad: 'Implementar el PMV, mediante la recolección, análisis y reporte de datos e información sobre las reducciones de emisiones, los beneficios socioambientales y el cumplimiento de las salvaguardas' },
    { Fecha: 'Noviembre 2026 - Octubre 2030', Actividad: 'Generar y comercializar los bonos de carbono, mediante la validación y verificación periódica del proyecto por parte de una entidad acreditada bajo el EC seleccionado' },
    { Fecha: 'Noviembre 2026 - Octubre 2030', Actividad: 'Distribuir los beneficios entre las partes interesadas, mediante la aplicación de criterios transparentes y equitativos para asignar los ingresos generados por la venta de los bonos de carbono' }
  ]




  return (
        <ImageBackground source={require('./assets/bg_pattern.jpg')} resizeMode='default' style={styles.imgbg} >
          {valor === 0 &&
            <>
              <View styles={{ flex: 1 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={styles.img1} source={require('./assets/logo_carbon_w.png')} />
                </View>


                <View style={styles.contenedor1}>

                  <View style={{ flex: 1, justifyContent: 'center', }}>
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={{ color: "white", textAlign: 'center', width: 300, fontSize: 17, padding: 7 }}>
                        ¡Estamos emocionados de mostrarte cómo estás contribuyendo al futuro sostenible de nuestro planeta!
                      </Text>
                    </View>

                    <TextInput onChangeText={text => setCorreo(text)}
                      style={styles.input}
                      placeholder='Ingresa tu correo'
                    />
                    <TextInput
                      style={styles.input}
                      placeholder='Ingresa tu contraseña'
                    />
                    <Text style={{ color: "blue", marginBottom: 7, padding: 7 }}>
                      ¿Olvidaste tu contraseña?
                    </Text>

                    <TouchableOpacity style={styles.button1} onPress={onPress}     >
                      <Text style={styles.buttonText}>
                        Ingresa.
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={onPresslog}      >
                      <Text style={styles.buttonText}>
                        Registro.
                      </Text>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>
            </>}

          {/* LOGINNNNNNNNNNNNNNNNNN */}

          {valor === 'log' &&
            <>
              <View styles={{ flex: 1 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={styles.img1} source={require('./assets/logo_carbon_w.png')} />
                </View>


                <View style={styles.contenedor1}>

                  <View style={{ flex: 1, justifyContent: 'center', }}>
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={{ color: "white", textAlign: 'center', width: 300, fontSize: 23, padding: 7, textAlign: 'center' }}>
                        Únete a nuestra comunidad y comienza a hacer la diferencia!
                      </Text>
                    </View>

                    <TextInput onChangeText={text => setCorreo(text)}
                      style={styles.input}
                      placeholder='Ingresa tu correo'
                    />
                    <TextInput
                      style={styles.input}
                      placeholder='Ingresa tu contraseña'
                    />

                    <TextInput
                      style={styles.input}
                      placeholder='Ingresa tu contraseña de nuevo'
                    />

                    <TouchableOpacity style={styles.button1} onPress={onPress}      >
                      <Text style={styles.buttonText}>
                        Registro.
                      </Text>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>
            </>}

          {/* pagina 2//////////////////////////////////////////////// */}

          {valor === 1 &&
            <>
              <View style={{ flex: 1, backgroundColor: 'rgba(7, 65, 79, 0.4)', margin: 15, borderRadius: 10, marginTop: 30,maxWidth: 450 }}>

                <ScrollView style={styles.scrollView}>

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }} onPress={onPress2}   >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        Salir
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }}    >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        {correo}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ paddingBottom: 10, color: "white", fontSize: 40, flex: 1 }}>Mis Proyectos</Text>
                  </View>

                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10, color: "white", fontSize: 18, flex: 1, textAlign: 'justify', padding: 20 }}>¡Bienvenidos a nuestra página de seguimiento de proyectos! Aquí podrás encontrar información actualizada sobre el progreso de nuestros proyectos en curso. Haz clic en cada proyecto para ver más detalles y conocer más sobre su desarrollo. ¡Mantente al tanto de nuestros avances y descubre todo lo que estás logrando!</Text>
                    <Text>
                      .
                    </Text>
                  </View>

                  {/* contenedores de valores /////////////////////////////////////////// */}

                  <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={styles.imgProy} source={require('./assets/pr_1.png')} />
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', flexDirection: 'column' }}>
                      <Text style={{ marginTop: 10, color: "white", fontSize: 19, flex: 1 }}>
                        CHONTA COROZO REDD+
                      </Text>
                      <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(7, 65, 79, 0.4)', flexDirection: 'row', borderRadius: 3, paddingHorizontal: 7, flex: 1, alignItems: 'center' }}>

                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <Text style={{ color: 'white', marginHorizontal: 10 }}>
                            47.2% .
                          </Text>

                        </View>

                      </View>

                      <View style={{ flex: 1 }} >
                        <TouchableOpacity style={styles.buttonproy1} onPress={onPress3}     >
                          <Text style={styles.buttonProy}>
                            Más información
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                  </View>

                  {/* separacion */}

                  <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={styles.imgProy} source={require('./assets/pr_2.png')} />
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', flexDirection: 'column' }}>
                      <Text style={{ marginTop: 10, color: "white", fontSize: 19, flex: 1 }}>
                        KALIAWIRI REDD+
                      </Text>
                      <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(7, 65, 79, 0.4)', flexDirection: 'row', borderRadius: 3, paddingHorizontal: 7, flex: 1, alignItems: 'center' }}>

                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <Text style={{ color: 'white', marginHorizontal: 10 }}>
                            75% .
                          </Text>

                        </View>

                      </View>

                      <View style={{ flex: 1 }} >
                        <TouchableOpacity style={styles.buttonproy1} onPress={onPressp2}     >
                          <Text style={styles.buttonProy}>
                            Más información
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                  </View>
                  {/* separacion */}

                  <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={styles.imgProy} source={require('./assets/pr_3.png')} />
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', flexDirection: 'column' }}>
                      <Text style={{ marginTop: 10, color: "white", fontSize: 19, flex: 1 }}>
                        BANAKALE - ISIMALI REDD+

                      </Text>
                      <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(7, 65, 79, 0.4)', flexDirection: 'row', borderRadius: 3, paddingHorizontal: 7, flex: 1, alignItems: 'center' }}>

                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "rgba(115, 200, 229, 1)", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <View style={{ width: 4, height: 10, backgroundColor: "white", marginTop: 4, marginBottom: 4, margin: 2, borderRadius: 3 }}>
                          </View>
                          <Text style={{ color: 'white', marginHorizontal: 10 }}>
                            15% .
                          </Text>

                        </View>

                      </View>

                      <View style={{ flex: 1 }} >
                        <TouchableOpacity style={styles.buttonproy1} onPress={onPressp3}     >
                          <Text style={styles.buttonProy}>
                            Más información
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                  </View>

                  {/* fin de los contenedores ////////////////////////////////////////////*/}

                </ScrollView>
              </View>
            </>}

          {/* pagina Proyecto 1//////////////////////////////////////////////// */}

          {valor === 'p1' &&
            <>
              <View style={{ flex: 1, backgroundColor: 'rgba(7, 65, 79, 0.4)', margin: 15, borderRadius: 10, marginTop: 30, maxWidth: 450}}>

                <ScrollView style={styles.scrollView}>

                  {/* Texto superior (salir y correo) */}

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }} onPress={onPress}   >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        Volver
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }}    >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        {correo}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* titulo////////////////////////////////// */}

                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ paddingBottom: 10, paddingTop: 10, color: "white", fontSize: 30, flex: 1 }}>CHONTA COROZO REDD+</Text>
                  </View>
                  {/* Imagen/////////////// */}

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy2} source={require('./assets/pr_1.png')} />
                  </View>

                  <Text style={{ margin: 10, color: "white", fontSize: 14, flex: 1, textAlign: 'justify' }}>
                    El proyecto lo compone el Consejo Comunitario de la Comunidad Negra del Alto Guapi, quien trabaja para proteger el bosque reduciendo y controlando la deforestación y degradación forestal. El consejo comunitario cuenta con un total aproximado de 1.823 personas, agrupados en 912 hombres y 911 mujeres aproximadamente. Actualmente se encuentra en proceso de validación y certificación por AENOR internacional, bajo la metodología del estándar de Verra. Este proyecto estima una reducción de emisiones de 128.830 TCO2e.

                    información general
                  </Text>
                  <Text>
                    .
                  </Text>

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy7} source={require('./assets/tab3.jpg')} />
                  </View>
                  {/* Tabla de valores /////////////////////////////////////////// */}

                  <View style={styles.container4}>
                    <View style={styles.row}>
                      <Text style={styles.header}>Fecha</Text>
                      <Text style={styles.header}>Actividad</Text>
                    </View>
                    {data.map((item, index) => (
                      <View key={index} style={styles.row}>
                        <Text style={styles.cell}>{item.Fecha}</Text>
                        <Text style={styles.cell}>{item.Actividad}</Text>
                      </View>
                    ))}
                  </View>

                  {/* fin de los contenedores ////////////////////////////////////////////*/}

                </ScrollView>
              </View>
            </>}

          {/* pagina Proyecto 2//////////////////////////////////////////////// */}

          {valor === 'p2' &&
            <>
              <View style={{ flex: 1, backgroundColor: 'rgba(7, 65, 79, 0.4)', margin: 15, borderRadius: 10, marginTop: 30, maxWidth: 450 }}>

                <ScrollView style={styles.scrollView}>

                  {/* Texto superior (salir y correo) */}

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }} onPress={onPress}   >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        Volver
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }}    >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        {correo}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* titulo////////////////////////////////// */}

                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ paddingBottom: 10, paddingTop: 10, color: "white", fontSize: 30, flex: 1 }}>KALIAWIRI REDD+
                    </Text>
                  </View>
                  {/* Imagen/////////////// */}

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy2} source={require('./assets/pr_2.png')} />
                  </View>

                  <Text style={{ margin: 10, color: "white", fontSize: 18, flex: 1, textAlign: 'justify' }}>
                    Siete resguardos indígenas de los pueblos sikuani y piapoco conforman este proyecto ubicado en Cumaribo, Vichada e Inírida, Guainía. Su nombre fue asignado por las comunidades haciendo alusión al árbol de la vida, de donde salieron todas las frutas o alimentos. KALIAWIRI REDD+ busca la protección de 358.065 hectáreas de bosque y beneficiar a más de 1.000 personas pertenecientes a los resguardos. Entre sus líneas de acción está el establecimiento de procesos educativos en gobernanza forestal, emprendimiento, igualdad de género, rescate de tradición cultural ancestral y alinderamiento territorial; así como reforestación, monitoreo comunitario e implementación de energías renovables y mejoramiento de infraestructura en comunicaciones, entre otros.

                    Información general
                  </Text>

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy7} source={require('./assets/tab2.jpg')} />
                  </View>

                  {/* Tabla de valores /////////////////////////////////////////// */}

                  <View style={styles.container4}>
                    <View style={styles.row}>
                      <Text style={styles.header}>Fecha</Text>
                      <Text style={styles.header}>Actividad</Text>
                    </View>
                    {data2.map((item, index) => (
                      <View key={index} style={styles.row}>
                        <Text style={styles.cell}>{item.fecha}</Text>
                        <Text style={styles.cell}>{item.actividad}</Text>
                      </View>
                    ))}
                  </View>

                  {/* fin de los contenedores ////////////////////////////////////////////*/}

                </ScrollView>
              </View>
            </>}

          {/* pagina Proyecto 3//////////////////////////////////////////////// */}

          {valor === 'p3' &&
            <>
              <View style={{ flex: 1, backgroundColor: 'rgba(7, 65, 79, 0.4)', margin: 15, borderRadius: 10, marginTop: 30 , maxWidth: 450}}>

                <ScrollView style={styles.scrollView}>

                  {/* Texto superior (salir y correo) */}

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }} onPress={onPress}   >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        Volver
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, textAlign: 'right', maxWidth: 2000 }}    >
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        {correo}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* titulo////////////////////////////////// */}

                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ paddingBottom: 10, paddingTop: 10, color: "white", fontSize: 30, flex: 1 }}>BANAKALE - ISIMALI REDD+

                    </Text>
                  </View>
                  {/* Imagen/////////////// */}

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy2} source={require('./assets/pr_3.png')} />
                  </View>

                  <Text style={{ margin: 10, color: "white", fontSize: 18, flex: 1, textAlign: 'justify' }}>
                    BANAKALE ISIMALI REDD+ está compuesto por los Resguardos Indígenas Llanura del Tomo y Santa Teresita del Tuparro, quienes trabajan en conjunto para proteger el bosque reduciendo y controlando la deforestación. Con las actividades de este proyecto se busca beneficiar a más de 3.000 personas pertenecientes a los resguardos y habitantes del territorio. Su nombre ‘BANAKALE’ viene de la lengua indígena del pueblo Sikuani, que significa la variedad de semillas que se encuentran en los conucos y en las huertas y la palabra “ISIMALI” significa trabajo, fuerza, dedicación, responsabilidad y liderazgo, lo que complementa el trabajo que realiza la comunidad a través de este proyecto REDD.

                    Información general
                  </Text>

                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.imgProy7} source={require('./assets/tab1.jpg')} />
                  </View>

                  {/* Tabla de valores /////////////////////////////////////////// */}

                  <View style={styles.container4}>
                    <View style={styles.row}>
                      <Text style={styles.header}>Fecha</Text>
                      <Text style={styles.header}>Actividad</Text>
                    </View>
                    {data3.map((item, index) => (
                      <View key={index} style={styles.row}>
                        <Text style={styles.cell}>{item.Fecha}</Text>
                        <Text style={styles.cell}>{item.Actividad}</Text>
                      </View>
                    ))}
                  </View>

                  {/* fin de los contenedores ////////////////////////////////////////////*/}

                </ScrollView>
              </View>
            </>}

        </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'space-around',

  },
  imgbg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  img1: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 300, height: 120
  },
  contenedor1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  button1: {
    backgroundColor: "#07414f",
    paddingTop: 7,
    paddingBottom: 7,
    margin: 5,
    alignItems: 'center',


  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
  scrollView: {
    flexDirection: "column",
  },
  imgProy: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 100, height: 100,
    borderRadius: 5,
    margin: 5,
  },
  buttonProy: {
    color: "white",
    fontSize: 15,
  },
  buttonproy1: {
    backgroundColor: "#07414f",
    paddingTop: 7,
    paddingBottom: 7,
    margin: 5,
    alignItems: 'center',
    width: 160,
    borderRadius: 3
  },
  imgProy2: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 300, height: 300,
    borderRadius: 5,
    margin: 5,
  },
  imgProy7: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 300, height: 200,
    borderRadius: 5,
    margin: 5,
  },
  row: {
    flexDirection: 'row'
  },
  container4: {
    margin: 10
  },
  header: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    fontWeight: 'bold',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000'
  },
  cell: {
    fontSize: 12,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000'
  },
});
