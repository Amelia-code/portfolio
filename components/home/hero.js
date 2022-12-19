import Animation from '/components/home/animation';
import Link from "next/link";

export default function Hero() {
    return (
     <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  안녕하세요 빡빡이입니다.
                  <br className="hidden lg:inline-block"/>
                  오늘도 빡코딩
                </h1>
                <p className="mb-8 leading-relaxed">이름과, 슬퍼하는 쉬이 자랑처럼 아직 이름자 속의 마리아 풀이 까닭입니다. 하나의 하나에 노루, 멀듯이, 사랑과 별 마리아 잠, 
                봅니다. 이웃 언덕 계절이 묻힌 까닭입니다. 멀리 못 어머니, 둘 보고, 멀리 별 있습니다. 별들을 불러 이웃 강아지, 잔디가 버리었습니다. 하나에 패, 덮어 봄이 듯합니다.
                그러나 별이 써 버리었습니다. 봄이 다 가을로 걱정도 헤일 거외다. 풀이 아침이 별 보고, 한 이름과, 이네들은 북간도에 딴은 있습니다.</p>
                <div className="flex justify-center">
                  <Link href = "/projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> 프로젝트 보러가기 </Link>
                 
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Animation/>
              </div>
            </div>
          </section>
    );
    
}