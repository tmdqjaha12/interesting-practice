// declare module "react-image-annotate";

// @import url("https://rsms.me/inter/inter.css");

import * as React from "react";

interface allowedAreaType {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}

export interface ReactImageAnnotateProps {
  // labelImages
  taskDescription?: string; // 이미지에서 수행할 작업에 대한 설명을 표시합니다
  allowedArea?: allowedAreaType; // 주석을 달 수 있는 영역입니다. //! Entire image
  regionTagList?: Array<string>; // 영역에 허용되는 "태그"(상호 포함 분류)입니다.
  regionClsList?: Array<string>; // 영역에 대해 허용되는 "클래스"(상호 배타적 분류)입니다.
  imageTagList?: Array<string>; // 전체 이미지에 허용되는 태그입니다.
  imageClsLisst?: Array<string>; // 전체 이미지에 허용된 클래스입니다.
  enabledTools?: Array<string>; // 사용할 수 있는 도구(예: "select", "create-point", "create-box", "create-polygon")
  showTags?: boolean; // 태그를 표시하고 영역에 태그를 허용합니다. //! Everything
  selectedImage?: string; // 처음에 선택한 이미지의 URL입니다. //! true
  images?: Array<Image>; // 주석으로 로드할 이미지 배열
  showPointDistances?: boolean; // 점 사이의 거리를 표시합니다. //! false
  pointDistancePrecision?: number; // 표시된 점의 정밀도(예: 3 => 0.123)
  onExit?: any; // "저장"이 호출되면 호출됩니다.
  RegionEditLabel?: Node; // 영역을 업데이트하기 위해 양식 재지정 노드 대응(Region Label 참조)
  allowComments?: boolean; // 각 주석에 주석을 추가할 텍스트 영역을 표시합니다. //! false
  hidePrev?: boolean; // 머리글 표시줄에서 이전 이미지 숨기기 버튼을 누릅니다. //! false
  hideNext?: boolean; // 머리글 표시줄에서 다음 이미지 숨기기 단추를 누릅니다. //! false
  hideClone?: boolean; // 머리글 표시줄에서 복제 단추를 숨깁니다. //! false
  hideSettings?: boolean; // 머리글 표시줄에서 설정 단추를 숨깁니다. //! false
  hideFullScreen?: boolean; // 머리글 표시줄에서 전체 화면/창 단추를 숨깁니다. //! false
  hideSave?: boolean; // 머리글 표시줄에서 저장 단추를 숨깁니다. //! false
}

export default function ReactImageAnnotate(
  props: ReactImageAnnotateProps
): JSX.Element;
