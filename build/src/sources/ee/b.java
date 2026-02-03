package ee;

import android.text.TextUtils;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    public final int f22757a;

    /* renamed from: b  reason: collision with root package name */
    public final int f22758b;

    /* renamed from: c  reason: collision with root package name */
    public final int f22759c;

    /* renamed from: d  reason: collision with root package name */
    public final int f22760d;

    /* renamed from: e  reason: collision with root package name */
    public final int f22761e;

    private b(int i10, int i11, int i12, int i13, int i14) {
        this.f22757a = i10;
        this.f22758b = i11;
        this.f22759c = i12;
        this.f22760d = i13;
        this.f22761e = i14;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static b a(String str) {
        char c10;
        ne.a.a(str.startsWith("Format:"));
        String[] split = TextUtils.split(str.substring(7), ",");
        int i10 = -1;
        int i11 = -1;
        int i12 = -1;
        int i13 = -1;
        for (int i14 = 0; i14 < split.length; i14++) {
            String e10 = ii.b.e(split[i14].trim());
            e10.getClass();
            switch (e10.hashCode()) {
                case 100571:
                    if (e10.equals(ViewProps.END)) {
                        c10 = 0;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 3556653:
                    if (e10.equals("text")) {
                        c10 = 1;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 109757538:
                    if (e10.equals(ViewProps.START)) {
                        c10 = 2;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 109780401:
                    if (e10.equals("style")) {
                        c10 = 3;
                        break;
                    }
                    c10 = 65535;
                    break;
                default:
                    c10 = 65535;
                    break;
            }
            switch (c10) {
                case 0:
                    i11 = i14;
                    break;
                case 1:
                    i13 = i14;
                    break;
                case 2:
                    i10 = i14;
                    break;
                case 3:
                    i12 = i14;
                    break;
            }
        }
        if (i10 != -1 && i11 != -1 && i13 != -1) {
            return new b(i10, i11, i12, i13, split.length);
        }
        return null;
    }
}
