package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class SVGLength {

    /* renamed from: a  reason: collision with root package name */
    final double f17743a;

    /* renamed from: b  reason: collision with root package name */
    final UnitType f17744b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum UnitType {
        UNKNOWN,
        NUMBER,
        PERCENTAGE,
        EMS,
        EXS,
        PX,
        CM,
        MM,
        IN,
        PT,
        PC
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17745a;

        static {
            int[] iArr = new int[ReadableType.values().length];
            f17745a = iArr;
            try {
                iArr[ReadableType.Number.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17745a[ReadableType.String.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17745a[ReadableType.Array.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private SVGLength() {
        this.f17743a = 0.0d;
        this.f17744b = UnitType.UNKNOWN;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ArrayList a(Dynamic dynamic) {
        int i10 = a.f17745a[dynamic.getType().ordinal()];
        if (i10 != 1) {
            int i11 = 0;
            if (i10 != 2) {
                if (i10 != 3) {
                    return null;
                }
                ReadableArray asArray = dynamic.asArray();
                int size = asArray.size();
                ArrayList arrayList = new ArrayList(size);
                while (i11 < size) {
                    arrayList.add(b(asArray.getDynamic(i11)));
                    i11++;
                }
                return arrayList;
            }
            String[] split = dynamic.asString().trim().replaceAll(",", " ").split(" ");
            ArrayList arrayList2 = new ArrayList(split.length);
            int length = split.length;
            while (i11 < length) {
                arrayList2.add(new SVGLength(split[i11]));
                i11++;
            }
            return arrayList2;
        }
        ArrayList arrayList3 = new ArrayList(1);
        arrayList3.add(new SVGLength(dynamic.asDouble()));
        return arrayList3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static SVGLength b(Dynamic dynamic) {
        int i10 = a.f17745a[dynamic.getType().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return new SVGLength();
            }
            return new SVGLength(dynamic.asString());
        }
        return new SVGLength(dynamic.asDouble());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String c(Dynamic dynamic) {
        int i10 = a.f17745a[dynamic.getType().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return dynamic.asString();
        }
        return String.valueOf(dynamic.asDouble());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SVGLength(double d10) {
        this.f17743a = d10;
        this.f17744b = UnitType.NUMBER;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SVGLength(String str) {
        String trim = str.trim();
        int length = trim.length();
        int i10 = length - 1;
        if (length != 0 && !trim.equals("normal")) {
            if (trim.codePointAt(i10) == 37) {
                this.f17744b = UnitType.PERCENTAGE;
                this.f17743a = Double.valueOf(trim.substring(0, i10)).doubleValue();
                return;
            }
            int i11 = length - 2;
            if (i11 > 0) {
                String substring = trim.substring(i11);
                substring.getClass();
                char c10 = 65535;
                switch (substring.hashCode()) {
                    case 3178:
                        if (substring.equals("cm")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3240:
                        if (substring.equals("em")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3251:
                        if (substring.equals("ex")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3365:
                        if (substring.equals("in")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3488:
                        if (substring.equals("mm")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3571:
                        if (substring.equals("pc")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3588:
                        if (substring.equals("pt")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3592:
                        if (substring.equals("px")) {
                            c10 = 7;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        this.f17744b = UnitType.CM;
                        length = i11;
                        break;
                    case 1:
                        this.f17744b = UnitType.EMS;
                        length = i11;
                        break;
                    case 2:
                        this.f17744b = UnitType.EXS;
                        length = i11;
                        break;
                    case 3:
                        this.f17744b = UnitType.IN;
                        length = i11;
                        break;
                    case 4:
                        this.f17744b = UnitType.MM;
                        length = i11;
                        break;
                    case 5:
                        this.f17744b = UnitType.PC;
                        length = i11;
                        break;
                    case 6:
                        this.f17744b = UnitType.PT;
                        length = i11;
                        break;
                    case 7:
                        this.f17744b = UnitType.NUMBER;
                        length = i11;
                        break;
                    default:
                        this.f17744b = UnitType.NUMBER;
                        break;
                }
                this.f17743a = Double.valueOf(trim.substring(0, length)).doubleValue();
                return;
            }
            this.f17744b = UnitType.NUMBER;
            this.f17743a = Double.valueOf(trim).doubleValue();
            return;
        }
        this.f17744b = UnitType.UNKNOWN;
        this.f17743a = 0.0d;
    }
}
