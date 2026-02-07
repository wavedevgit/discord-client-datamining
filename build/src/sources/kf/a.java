package kf;

import android.util.Log;
import gf.i;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f31694a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31695b;

    /* renamed from: c  reason: collision with root package name */
    private final i f31696c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31697d;

    public a(String str, String... strArr) {
        String sb2;
        if (strArr.length == 0) {
            sb2 = "";
        } else {
            StringBuilder sb3 = new StringBuilder();
            sb3.append('[');
            for (String str2 : strArr) {
                if (sb3.length() > 1) {
                    sb3.append(",");
                }
                sb3.append(str2);
            }
            sb3.append("] ");
            sb2 = sb3.toString();
        }
        this.f31695b = sb2;
        this.f31694a = str;
        this.f31696c = new i(str);
        int i10 = 2;
        while (i10 <= 7 && !Log.isLoggable(this.f31694a, i10)) {
            i10++;
        }
        this.f31697d = i10;
    }

    public void a(String str, Object... objArr) {
        if (d(3)) {
            Log.d(this.f31694a, c(str, objArr));
        }
    }

    public void b(String str, Object... objArr) {
        Log.e(this.f31694a, c(str, objArr));
    }

    protected String c(String str, Object... objArr) {
        if (objArr != null && objArr.length > 0) {
            str = String.format(Locale.US, str, objArr);
        }
        return this.f31695b.concat(str);
    }

    public boolean d(int i10) {
        if (this.f31697d <= i10) {
            return true;
        }
        return false;
    }
}
