package ei;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f22830a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22831b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22832c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22833d;

    /* renamed from: e  reason: collision with root package name */
    private final long f22834e;

    /* renamed from: f  reason: collision with root package name */
    private final List f22835f;

    /* renamed from: g  reason: collision with root package name */
    private final List f22836g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f22837h;

    /* renamed from: i  reason: collision with root package name */
    private final List f22838i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f22830a = i10;
        this.f22831b = i11;
        this.f22832c = i12;
        this.f22833d = j10;
        this.f22834e = j11;
        this.f22835f = list;
        this.f22836g = list2;
        this.f22837h = pendingIntent;
        this.f22838i = list3;
    }

    @Override // ei.a
    public final long a() {
        return this.f22833d;
    }

    @Override // ei.a
    public final int b() {
        return this.f22832c;
    }

    @Override // ei.a
    public final PendingIntent c() {
        return this.f22837h;
    }

    @Override // ei.a
    public final int d() {
        return this.f22830a;
    }

    @Override // ei.a
    public final int e() {
        return this.f22831b;
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
            if (this.f22830a == aVar.d() && this.f22831b == aVar.e() && this.f22832c == aVar.b() && this.f22833d == aVar.a() && this.f22834e == aVar.f() && ((list = this.f22835f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f22836g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f22837h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f22838i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ei.a
    public final long f() {
        return this.f22834e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List g() {
        return this.f22836g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List h() {
        return this.f22835f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f22830a ^ 1000003) * 1000003) ^ this.f22831b) * 1000003) ^ this.f22832c;
        long j10 = this.f22833d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f22834e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f22835f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f22836g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f22837h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f22838i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List i() {
        return this.f22838i;
    }

    public final String toString() {
        int i10 = this.f22830a;
        int i11 = this.f22831b;
        int i12 = this.f22832c;
        long j10 = this.f22833d;
        long j11 = this.f22834e;
        String valueOf = String.valueOf(this.f22835f);
        String valueOf2 = String.valueOf(this.f22836g);
        String valueOf3 = String.valueOf(this.f22837h);
        String valueOf4 = String.valueOf(this.f22838i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
