package ei;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f21521a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21522b;

    /* renamed from: c  reason: collision with root package name */
    private final int f21523c;

    /* renamed from: d  reason: collision with root package name */
    private final long f21524d;

    /* renamed from: e  reason: collision with root package name */
    private final long f21525e;

    /* renamed from: f  reason: collision with root package name */
    private final List f21526f;

    /* renamed from: g  reason: collision with root package name */
    private final List f21527g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f21528h;

    /* renamed from: i  reason: collision with root package name */
    private final List f21529i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f21521a = i10;
        this.f21522b = i11;
        this.f21523c = i12;
        this.f21524d = j10;
        this.f21525e = j11;
        this.f21526f = list;
        this.f21527g = list2;
        this.f21528h = pendingIntent;
        this.f21529i = list3;
    }

    @Override // ei.a
    public final long a() {
        return this.f21524d;
    }

    @Override // ei.a
    public final int b() {
        return this.f21523c;
    }

    @Override // ei.a
    public final PendingIntent c() {
        return this.f21528h;
    }

    @Override // ei.a
    public final int d() {
        return this.f21521a;
    }

    @Override // ei.a
    public final int e() {
        return this.f21522b;
    }

    public final boolean equals(Object obj) {
        List list;
        List list2;
        PendingIntent pendingIntent;
        List list3;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f21521a == aVar.d() && this.f21522b == aVar.e() && this.f21523c == aVar.b() && this.f21524d == aVar.a() && this.f21525e == aVar.f() && ((list = this.f21526f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f21527g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f21528h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f21529i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ei.a
    public final long f() {
        return this.f21525e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List g() {
        return this.f21527g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List h() {
        return this.f21526f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f21521a ^ 1000003) * 1000003) ^ this.f21522b) * 1000003) ^ this.f21523c;
        long j10 = this.f21524d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f21525e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f21526f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f21527g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f21528h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f21529i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List i() {
        return this.f21529i;
    }

    public final String toString() {
        int i10 = this.f21521a;
        int i11 = this.f21522b;
        int i12 = this.f21523c;
        long j10 = this.f21524d;
        long j11 = this.f21525e;
        String valueOf = String.valueOf(this.f21526f);
        String valueOf2 = String.valueOf(this.f21527g);
        String valueOf3 = String.valueOf(this.f21528h);
        String valueOf4 = String.valueOf(this.f21529i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
