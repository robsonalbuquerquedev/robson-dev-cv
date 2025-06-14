'use client';

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-blue-800 text-white p-6 flex flex-col items-center">
          <Image
            src="/robson.png"
            alt="Robson Albuquerque"
            width={150}
            height={150}
            className="rounded-full border-4 border-white"
          />

          <section className="mt-8 w-full">
            <h2 className="text-xl font-semibold border-b border-white pb-1 mb-3">
              Soft Skills
            </h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Comunicação clara e objetiva</li>
              <li>Trabalho em equipe</li>
              <li>Adaptabilidade a novos cenários e tecnologias</li>
              <li>Resolução de problemas de forma colaborativa</li>
              <li>Gestão eficiente do tempo</li>
              <li>Proatividade e iniciativa</li>
              <li>Senso crítico e tomada de decisão</li>
              <li>Empatia no ambiente de trabalho</li>
              <li>Autodidatismo (aprendizado contínuo)</li>
              <li>Resiliência frente a desafios</li>
              <li>Organização e foco em resultados</li>
            </ul>
          </section>

          <section className="mt-6 w-full">
            <h2 className="text-xl font-semibold border-b border-white pb-1 mb-3">
              Hard Skills
            </h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              {/* Front-End */}
              <li><strong>Front-End:</strong> React.js, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Sass</li>

              {/* Back-End */}
              <li><strong>Back-End:</strong> Node.js, PHP, Django, Java (Spring Boot)</li>

              {/* Mobile */}
              <li><strong>Mobile:</strong> Android Studio (Kotlin)</li>

              {/* Banco de Dados */}
              <li><strong>Banco de Dados:</strong> MySQL, Firebase (Auth, Realtime DB)</li>

              {/* Machine Learning */}
              <li><strong>Machine Learning:</strong> Python (Random Forest, Gradient Boost, Decision Tree)</li>

              {/* Ferramentas e Design */}
              <li><strong>Ferramentas:</strong> Figma, Git & GitHub, Postman, Insomnia</li>

              {/* Linguagens dominadas */}
              <li><strong>Linguagens:</strong> JavaScript, TypeScript, Python, PHP, Java</li>
            </ul>
          </section>

          <section className="mt-6 w-full">
            <h2 className="text-xl font-semibold border-b border-white pb-1 mb-3">
              Idiomas
            </h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Português — Nativo</li>
              <li>Inglês — Avançado (C1)</li>
            </ul>
          </section>
        </aside>

        {/* Conteúdo Principal */}
        <section className="md:col-span-2 p-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-blue-800"
          >
            Robson Monteiro de Albuquerque
          </motion.h1>

          <p className="text-lg text-gray-600 mb-2">Desenvolvedor Front-End</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-700 mb-6">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> (81) 97116-8633
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> robson.albuquerque.docs@gmail.com
            </p>
            <a
              href="/robson-cv.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer print:hidden"
            >
              <FaFilePdf /> Baixar CV
            </a>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2">
              Sobre Mim
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sou Robson Albuquerque, estudante do último semestre de Análise e Desenvolvimento de Sistemas, com formação técnica em Redes de Computadores e Informática para Internet. Apaixonado por tecnologia desde o início da minha jornada acadêmica, mantenho o foco em desenvolvimento front-end com React e Next.js, além de uma constante evolução em habilidades como TypeScript, Firebase e UX/UI. Atuei como assistente de loja na Magazine Luiza S/A, onde desenvolvi atenção aos detalhes, proatividade e empatia no atendimento. Estou sempre em busca de novos desafios, aprimorando também meu inglês, para me comunicar com o mundo e crescer na área de TI com propósito e consistência.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2">
              Experiência
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <p className="font-semibold">Assistente de Loja • Magazine Luiza S/A — 2020–2021</p>
                <p className="text-sm leading-relaxed">
                  Atendimento direto ao cliente, organização da loja e suporte em processos de troca e devolução de produtos. Responsável por reposição de estoque, conferência de mercadorias e auxílio em metas de vendas. Desenvolvi habilidades em comunicação, trabalho em equipe e resolução de problemas em ambiente dinâmico.
                </p>
              </li>
            </ul>
          </section>


          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2">
              Formação Acadêmica
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                <p className="font-semibold">Curso Superior em Análise e Desenvolvimento de Sistemas</p>
                <p>IFPE – Instituto Federal de Pernambuco • Conclusão prevista: 2025</p>
                <p>Projetos de software, desenvolvimento web, mobile, bancos de dados e integração com APIs REST.</p>
              </li>
              <li>
                <p className="font-semibold">Curso Técnico em Informática para Internet</p>
                <p>IFPE – Instituto Federal de Pernambuco • Concluído em 2022</p>
                <p>Criação de páginas web, lógica de programação, banco de dados e princípios de design responsivo.</p>
              </li>
              <li>
                <p className="font-semibold">Curso Técnico em Redes de Computadores</p>
                <p>IFPE – Instituto Federal de Pernambuco • Concluído em 2019</p>
                <p>Infraestrutura de redes, protocolos, cabeamento estruturado e segurança da informação.</p>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2">Cursos</h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
              <li>
                <p className="font-semibold">Intermediate English – Laiane Mochi Teacher</p>
                <p>
                  Curso Online de Inglês • 400h • 2023
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/1BHZw1VjrwMyT_a8IjapnSE_TLOzKkqnL/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Fluency Academy – Gavin’s Elite Squad</p>
                <p>
                  Curso Online de Inglês • 150h • 2022
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/1VZMXuwfzrvdsp6tcZ4zDQWSYjpZ3keP9/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Qualificação em Inteligência Artificial</p>
                <p>
                  Programa MCTI do Futuro • 60h • 2023
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/1sP85RbXeHIG6nmPOpQI4b6k8ktS2hjVZ/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Google Workspace</p>
                <p>
                  Programa de Extensão Tecnológica • 21h • 2023
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/1YtyE9_Ep7fRhef9n3AYrttJgmwS1Bc-v/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Monitoramento de Reservatórios com IoT e Computação em Nuvem</p>
                <p>
                  Programa de Extensão Tecnológica • 32h • 2024
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/1mXdUSROFlahT4p6Yd1uXHKseWy9FRZxd/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Detecção inteligente de intrusão em redes</p>
                <p>
                  Programa de Extensão Tecnológica • 40h • 2025
                  <span className="print:hidden"> –{" "}
                    <a
                      href="https://drive.google.com/file/d/11l7FNw1KELoBWFoG3wydnSoBLdfa7Q8k/view?usp=sharing"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Ver certificado 🔗
                    </a>
                  </span>
                  <span className="hidden print:inline">.</span>
                </p>
              </li>

              <li>
                <p className="font-semibold">Descomplica Que Destrava – Gabi Modesto Teacher</p>
                <p>Em andamento • 2025.</p>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projetos</h2>
            <ul className="list-disc list-inside text-sm space-y-3 text-gray-700">

              <li>
                <span className="print:hidden">
                  <a
                    href="https://github.com/robsonalbuquerquedev/UrgenciaSeguraApp.git"
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank"
                  >
                    Urgência Segura App (Mobile)
                  </a>
                  <span className="ml-2 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Em desenvolvimento
                  </span>
                </span>
                <span className="hidden print:inline font-semibold">
                  Urgência Segura App (Mobile)
                </span>{" "}
                – Aplicativo móvel para solicitação de atendimentos emergenciais, com foco em reduzir trotes e otimizar o tempo de resposta de serviços como o SAMU. Utiliza integração com o Firebase Realtime Database e foi desenvolvido como parte do Trabalho de Conclusão de Curso.
                <br />
                <span className="text-gray-600 text-xs">
                  <strong>Tecnologias:</strong> Android Studio (Kotlin), Firebase Realtime Database, Firebase Authentication.
                </span>
              </li>

              <li>
                <span className="print:hidden">
                  <a
                    href="https://github.com/robsonalbuquerquedev/urgencia-segura-web.git"
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank"
                  >
                    Urgência Segura Web (Portal de Monitoramento)
                  </a>
                  <span className="ml-2 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Em desenvolvimento
                  </span>
                </span>
                <span className="hidden print:inline font-semibold">
                  Urgência Segura Web (Portal de Monitoramento)
                </span>{" "}
                – Sistema web em Next.js para visualização em tempo real das ocorrências enviadas pelo aplicativo. Permite que profissionais da saúde e da Defesa Civil acompanhem e gerenciem solicitações com agilidade e organização.
                <br />
                <span className="text-gray-600 text-xs">
                  <strong>Tecnologias:</strong> Next.js, TypeScript, Tailwind CSS, Firebase Realtime Database, Vercel.
                </span>
              </li>

              <li>
                <span className="print:hidden">
                  <a
                    href="https://github.com/Sistema-HUOC/HUOC-FRONT.git"
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank"
                  >
                    Sistema HUOC (Frontend Web)
                  </a>
                  <span className="ml-2 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Em desenvolvimento
                  </span>
                </span>
                <span className="hidden print:inline font-semibold">
                  Sistema HUOC (Frontend Web)
                </span>{" "}
                – Plataforma colaborativa desenvolvida por alunos do 6º período de ADS com foco na gestão e padronização de dados clínicos no Hospital Universitário Oswaldo Cruz (HUOC). O sistema garante segurança da informação e conformidade com a LGPD. Atuo como Tech Leader da equipe frontend, em conjunto com áreas de backend, mobile e gestão de projeto.
                <br />
                <span className="text-gray-600 text-xs">
                  <strong>Tecnologias:</strong> Next.js, TypeScript, Tailwind CSS, Docker Compose, Swagger, Spring Boot, Java, RESTful API, MySQL.
                </span>
              </li>

              <li>
                <span className="print:hidden">
                  <a
                    href="https://github.com/robsonalbuquerquedev/resourcesManagement.git"
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank"
                  >
                    ResourcesManagement
                  </a>
                  <span className="ml-2 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Em desenvolvimento
                  </span>
                </span>
                <span className="hidden print:inline font-semibold">
                  ResourcesManagement
                </span>{" "}
                – Aplicação web construída com Vue.js no frontend e Spring Boot no backend, voltada para o gerenciamento de salas, laboratórios e recursos de uma instituição de ensino. Oferece experiências personalizadas para coordenadores, professores e alunos. Projeto desenvolvido em dupla no 5º período, com Robson responsável pelo desenvolvimento técnico e Hiany Silva na gestão de projeto e UX/UI.
                <br />
                <span className="text-gray-600 text-xs">
                  <strong>Tecnologias:</strong> Vue.js, Spring Boot, Java, RESTful API, Axios, HTML5, CSS3, MySQL.
                </span>
              </li>

            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}
