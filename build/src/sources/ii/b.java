package ii;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26768a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26769b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26770c;

    /* renamed from: d  reason: collision with root package name */
    private final long f26771d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26772e;

    /* renamed from: f  reason: collision with root package name */
    private final List f26773f;

    /* renamed from: g  reason: collision with root package name */
    private final List f26774g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f26775h;

    /* renamed from: i  reason: collision with root package name */
    private final List f26776i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f26768a = i10;
        this.f26769b = i11;
        this.f26770c = i12;
        this.f26771d = j10;
        this.f26772e = j11;
        this.f26773f = list;
        this.f26774g = list2;
        this.f26775h = pendingIntent;
        this.f26776i = list3;
    }

    @Override // ii.a
    public final long a() {
        return this.f26771d;
    }

    @Override // ii.a
    public final int b() {
        return this.f26770c;
    }

    @Override // ii.a
    public final PendingIntent c() {
        return this.f26775h;
    }

    @Override // ii.a
    public final int d() {
        return this.f26768a;
    }

    @Override // ii.a
    public final int e() {
        return this.f26769b;
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
            if (this.f26768a == aVar.d() && this.f26769b == aVar.e() && this.f26770c == aVar.b() && this.f26771d == aVar.a() && this.f26772e == aVar.f() && ((list = this.f26773f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f26774g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f26775h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f26776i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ii.a
    public final long f() {
        return this.f26772e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List g() {
        return this.f26774g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List h() {
        return this.f26773f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f26768a ^ 1000003) * 1000003) ^ this.f26769b) * 1000003) ^ this.f26770c;
        long j10 = this.f26771d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f26772e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f26773f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f26774g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f26775h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f26776i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List i() {
        return this.f26776i;
    }

    public final String toString() {
        int i10 = this.f26768a;
        int i11 = this.f26769b;
        int i12 = this.f26770c;
        long j10 = this.f26771d;
        long j11 = this.f26772e;
        String valueOf = String.valueOf(this.f26773f);
        String valueOf2 = String.valueOf(this.f26774g);
        String valueOf3 = String.valueOf(this.f26775h);
        String valueOf4 = String.valueOf(this.f26776i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
