package pb;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.facebook.soloader.p;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f45005a;

    /* renamed from: b  reason: collision with root package name */
    private int f45006b;

    public a(int i10) {
        if (i10 > 0) {
            this.f45005a = new String[i10];
            this.f45006b = 0;
            return;
        }
        throw new IllegalArgumentException();
    }

    public synchronized boolean a(String str) {
        for (String str2 : this.f45005a) {
            if (str.equals(str2)) {
                return false;
            }
        }
        StringBuilder sb2 = new StringBuilder("Recording new base apk path: ");
        sb2.append(str);
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        b(sb2);
        p.g("SoLoader", sb2.toString());
        String[] strArr = this.f45005a;
        int i10 = this.f45006b;
        strArr[i10 % strArr.length] = str;
        this.f45006b = i10 + 1;
        return true;
    }

    public synchronized void b(StringBuilder sb2) {
        String str;
        try {
            sb2.append("Previously recorded ");
            sb2.append(this.f45006b);
            sb2.append(" base apk paths.");
            if (this.f45006b > 0) {
                sb2.append(" Most recent ones:");
            }
            int i10 = 0;
            while (true) {
                String[] strArr = this.f45005a;
                if (i10 < strArr.length) {
                    int i11 = (this.f45006b - i10) - 1;
                    if (i11 >= 0) {
                        String str2 = strArr[i11 % strArr.length];
                        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                        sb2.append(str2);
                        sb2.append(" (");
                        if (new File(str2).exists()) {
                            str = "exists";
                        } else {
                            str = "does not exist";
                        }
                        sb2.append(str);
                        sb2.append(")");
                    }
                    i10++;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized int c() {
        return this.f45006b;
    }
}
