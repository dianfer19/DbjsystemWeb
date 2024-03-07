"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ListTecnology from "@/components/About/ListTecnology";
import tecnologyData from "@/components/About/tecnologyData";

const About = () => {
  return (
    <>


      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235  pt-35 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Historia

              </h2>
              <p className={"text-justify"}>
                Nuestra historia comenzó hace más de 10 años, marcada por el desarrollo de soluciones
                robustas y
                sistemas web avanzados. Especializándonos en tecnologías como JSF, ASP.NET, Django y
                Next.js,
                hemos implementado proyectos clave en grandes empresas del calibre de Holcim, Andec,
                Hilarykan, MTOP y Fortrade. Cada proyecto ha sido un paso hacia la excelencia, llevando
                innovación y eficiencia a cada cliente.

                Descubre más sobre nuestro impacto y explora nuestro portafolio de proyectos
                emblemáticos.
              </p>
              <div>
                <Link
                  href="/portafolio"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Portafolio
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/historia.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/historia.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div
              className="hidden pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10
              relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 lg:block xl:px-0">
              <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
                <Image
                  width={1200}
                  height={400}
                  sizes="(max-width: 768px) 100vw"
                  src="/images/shape/shape-dotted-light.svg"
                  alt="Dotted"
                  className="dark:hidden"
                  style={{ position: "static" }}
                />
                <Image
                  fill
                  src="/images/shape/shape-dotted-dark.svg"
                  alt="Dotted"
                  className="hidden dark:block"
                />
              </div>
              <div className="flex flex-wrap justify-around gap-y-10">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/python.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                ></motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/django.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/next.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                ></motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/docker.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/grafana.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div
                    className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={50}
                      height={50}
                      src="./images/brand/prometheus.svg"
                      alt="Brand"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },
                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span
                  className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Compromiso
                </span>{" "}
                El cliente es nuestra prioridad
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Experiencia y Especialización
                <span
                  className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                </span>
              </h2>
              <p className={"text-justify"}>
                A lo largo de los años, hemos ampliado nuestro expertise para incluir tecnologías
                vanguardistas
                como.
              </p>
              {tecnologyData.map((tecnology, key) => (
                <ListTecnology key={key} tecnology={tecnology}></ListTecnology>
              ))}


            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
