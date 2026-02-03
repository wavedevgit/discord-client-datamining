package fi;

import android.os.Process;
import android.text.TextUtils;
import android.util.Log;
import java.util.IllegalFormatException;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f24030a;

    public r0(String str) {
        int myUid = Process.myUid();
        int myPid = Process.myPid();
        this.f24030a = ("UID: [" + myUid + "]  PID: [" + myPid + "] ").concat(str);
    }

    private static String c(String str, String str2, Object... objArr) {
        if (objArr.length > 0) {
            try {
                str2 = String.format(Locale.US, str2, objArr);
            } catch (IllegalFormatException e10) {
                Log.e("PlayCore", "Unable to format ".concat(str2), e10);
                str2 = str2 + " [" + TextUtils.join(", ", objArr) + "]";
            }
        }
        return str + " : " + str2;
    }

    public final int a(String str, Object... objArr) {
        if (Log.isLoggable("PlayCore", 3)) {
            return Log.d("PlayCore", c(this.f24030a, str, objArr));
        }
        return 0;
    }

    public final int b(String str, Object... objArr) {
        if (Log.isLoggable("PlayCore", 6)) {
            return Log.e("PlayCore", c(this.f24030a, str, objArr));
        }
        return 0;
    }
}
