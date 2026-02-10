package li;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f35828a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35829b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35830c;

    /* renamed from: d  reason: collision with root package name */
    private final long f35831d;

    /* renamed from: e  reason: collision with root package name */
    private final long f35832e;

    /* renamed from: f  reason: collision with root package name */
    private final List f35833f;

    /* renamed from: g  reason: collision with root package name */
    private final List f35834g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f35835h;

    /* renamed from: i  reason: collision with root package name */
    private final List f35836i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f35828a = i10;
        this.f35829b = i11;
        this.f35830c = i12;
        this.f35831d = j10;
        this.f35832e = j11;
        this.f35833f = list;
        this.f35834g = list2;
        this.f35835h = pendingIntent;
        this.f35836i = list3;
    }

    @Override // li.a
    public final long a() {
        return this.f35831d;
    }

    @Override // li.a
    public final int b() {
        return this.f35830c;
    }

    @Override // li.a
    public final PendingIntent c() {
        return this.f35835h;
    }

    @Override // li.a
    public final int d() {
        return this.f35828a;
    }

    @Override // li.a
    public final int e() {
        return this.f35829b;
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
            if (this.f35828a == aVar.d() && this.f35829b == aVar.e() && this.f35830c == aVar.b() && this.f35831d == aVar.a() && this.f35832e == aVar.f() && ((list = this.f35833f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f35834g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f35835h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f35836i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // li.a
    public final long f() {
        return this.f35832e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List g() {
        return this.f35834g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List h() {
        return this.f35833f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f35828a ^ 1000003) * 1000003) ^ this.f35829b) * 1000003) ^ this.f35830c;
        long j10 = this.f35831d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f35832e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f35833f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f35834g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f35835h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f35836i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List i() {
        return this.f35836i;
    }

    public final String toString() {
        int i10 = this.f35828a;
        int i11 = this.f35829b;
        int i12 = this.f35830c;
        long j10 = this.f35831d;
        long j11 = this.f35832e;
        String valueOf = String.valueOf(this.f35833f);
        String valueOf2 = String.valueOf(this.f35834g);
        String valueOf3 = String.valueOf(this.f35835h);
        String valueOf4 = String.valueOf(this.f35836i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
