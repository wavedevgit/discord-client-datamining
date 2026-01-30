package j$.time.chrono;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class k extends a implements Serializable {

    /* renamed from: a  reason: collision with root package name */
    public static final k f31558a = new Object();

    public static boolean w(long j10) {
        if ((3 & j10) == 0) {
            return j10 % 100 != 0 || j10 % 400 == 0;
        }
        return false;
    }
}
