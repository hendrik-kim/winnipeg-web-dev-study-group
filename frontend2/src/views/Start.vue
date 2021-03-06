<template>
  <div>
    <v-container>
      <div class="d-flex justify-center my-5">
        <h1>시작하기</h1>
      </div>
      <v-divider></v-divider>
      <!-- <template>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  {{ item.content }}
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </template> -->
      <template>
        <div class="ma-10">
          <div class="my-10">
            <v-alert border="left" colored-border type="info" elevation="2">
              수업에 들어가기 전에 준비해야 할 내용들을 안내해 드리겠습니다.
            </v-alert>
          </div>

          <h2>프로그램 설치하기</h2>
          <v-divider></v-divider>
          <ul class="my-5">
            <li><h4>Visual Studio Code</h4></li>
            <ul>
              <li>
                저희가 소프트웨어 개발에 사용하는 문서편집기입니다. 아래
                링크에서 본인의 운영체제에 맞는 설치파일을 받아 실행합니다.
              </li>
              <li>
                <a target="_blank" href="https://code.visualstudio.com/"
                  >https://code.visualstudio.com/</a
                >
              </li>
              <a
                href="https://www.youtube.com/watch?v=LdF2RcelRg0"
                target="_blank"
              >
                <v-alert class="mt-3" icon="mdi-youtube-tv" text type="info">
                  VS Code는 여러가지 다양한 확장 기능들을 설치하고 사용할 수
                  있습니다. 유용한 Extension들을 설치 해봅시다.
                </v-alert>
              </a>
            </ul>
            <br />
            <li><h4>Microsoft Teams</h4></li>
            <ul>
              <li>
                수업에 필요한 음성통화, 자료공유 및 공지사항 전달 등에 쓰이게 될
                프로그램입니다
              </li>
              <li>
                프로그램을 사용하기 위해 아래 링크에서 Microsoft 계정을 등록하고
                파일을 받아 설치합니다.
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.microsoft.com/en-ca/microsoft-teams/download-app"
                  >https://www.microsoft.com/en-ca/microsoft-teams/download-app
                </a>
              </li>
              <li>
                저희 웹 개발 스터디 그룹 채널에 가입하세요.
                <a href="https://teams.microsoft.com/join/39x9rtpegqh5">
                  가입하기
                  <v-icon small color="info">
                    mdi-export-variant
                  </v-icon>
                </a>
              </li>
            </ul>
            <br />
            <li><h4>Git &amp; Github</h4></li>
            <ul>
              <li>
                Git은 대표적인 버전 관리 시스템(VCS)으로 사용자 자신이 작성한
                코드를 쉽게 관리할 수 있도록 지원합니다.
              </li>
              <li>
                GitHub은 가장 널리 쓰이는 Git 무료 온라인 저장소입니다. 개발자는
                깃허브를 통해 자신의 소스코드를 호스팅하고 다른 개발자들과
                협업할 수 있습니다.
              </li>
              <li>
                저희는 수업 중반부에 GitHub에서 제공하는 유용한 호스팅 서비스인
                GitPage로 본인이 작성한 소스코드를 웹에 호스팅하는 실습을
                해보겠습니다.
              </li>
              <a
                href="https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=1751s"
                target="_blank"
              >
                <v-alert class="mt-3" icon="mdi-youtube-tv" text type="info">
                  Git 과 GitHub의 설치법 및 사용법을 알아봅시다.
                </v-alert>
              </a>
            </ul>
          </ul>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '프로그램 설치',
        content: '설명',
        color: 'red lighten-2',
        icon: 'mdi-numeric-1',
      },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
