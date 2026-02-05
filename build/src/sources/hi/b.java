package hi;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f25865a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25866b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25867c;

    /* renamed from: d  reason: collision with root package name */
    private final long f25868d;

    /* renamed from: e  reason: collision with root package name */
    private final long f25869e;

    /* renamed from: f  reason: collision with root package name */
    private final List f25870f;

    /* renamed from: g  reason: collision with root package name */
    private final List f25871g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f25872h;

    /* renamed from: i  reason: collision with root package name */
    private final List f25873i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f25865a = i10;
        this.f25866b = i11;
        this.f25867c = i12;
        this.f25868d = j10;
        this.f25869e = j11;
        this.f25870f = list;
        this.f25871g = list2;
        this.f25872h = pendingIntent;
        this.f25873i = list3;
    }

    @Override // hi.a
    public final long a() {
        return this.f25868d;
    }

    @Override // hi.a
    public final int b() {
        return this.f25867c;
    }

    @Override // hi.a
    public final PendingIntent c() {
        return this.f25872h;
    }

    @Override // hi.a
    public final int d() {
        return this.f25865a;
    }

    @Override // hi.a
    public final int e() {
        return this.f25866b;
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
            if (this.f25865a == aVar.d() && this.f25866b == aVar.e() && this.f25867c == aVar.b() && this.f25868d == aVar.a() && this.f25869e == aVar.f() && ((list = this.f25870f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f25871g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f25872h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f25873i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // hi.a
    public final long f() {
        return this.f25869e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.a
    public final List g() {
        return this.f25871g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.a
    public final List h() {
        return this.f25870f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f25865a ^ 1000003) * 1000003) ^ this.f25866b) * 1000003) ^ this.f25867c;
        long j10 = this.f25868d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f25869e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f25870f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f25871g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f25872h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f25873i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.a
    public final List i() {
        return this.f25873i;
    }

    public final String toString() {
        int i10 = this.f25865a;
        int i11 = this.f25866b;
        int i12 = this.f25867c;
        long j10 = this.f25868d;
        long j11 = this.f25869e;
        String valueOf = String.valueOf(this.f25870f);
        String valueOf2 = String.valueOf(this.f25871g);
        String valueOf3 = String.valueOf(this.f25872h);
        String valueOf4 = String.valueOf(this.f25873i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
