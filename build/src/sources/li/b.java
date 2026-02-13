package li;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f36397a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36398b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36399c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36400d;

    /* renamed from: e  reason: collision with root package name */
    private final long f36401e;

    /* renamed from: f  reason: collision with root package name */
    private final List f36402f;

    /* renamed from: g  reason: collision with root package name */
    private final List f36403g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f36404h;

    /* renamed from: i  reason: collision with root package name */
    private final List f36405i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f36397a = i10;
        this.f36398b = i11;
        this.f36399c = i12;
        this.f36400d = j10;
        this.f36401e = j11;
        this.f36402f = list;
        this.f36403g = list2;
        this.f36404h = pendingIntent;
        this.f36405i = list3;
    }

    @Override // li.a
    public final long a() {
        return this.f36400d;
    }

    @Override // li.a
    public final int b() {
        return this.f36399c;
    }

    @Override // li.a
    public final PendingIntent c() {
        return this.f36404h;
    }

    @Override // li.a
    public final int d() {
        return this.f36397a;
    }

    @Override // li.a
    public final int e() {
        return this.f36398b;
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
            if (this.f36397a == aVar.d() && this.f36398b == aVar.e() && this.f36399c == aVar.b() && this.f36400d == aVar.a() && this.f36401e == aVar.f() && ((list = this.f36402f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f36403g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f36404h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f36405i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // li.a
    public final long f() {
        return this.f36401e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List g() {
        return this.f36403g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List h() {
        return this.f36402f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f36397a ^ 1000003) * 1000003) ^ this.f36398b) * 1000003) ^ this.f36399c;
        long j10 = this.f36400d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f36401e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f36402f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f36403g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f36404h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f36405i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.a
    public final List i() {
        return this.f36405i;
    }

    public final String toString() {
        int i10 = this.f36397a;
        int i11 = this.f36398b;
        int i12 = this.f36399c;
        long j10 = this.f36400d;
        long j11 = this.f36401e;
        String valueOf = String.valueOf(this.f36402f);
        String valueOf2 = String.valueOf(this.f36403g);
        String valueOf3 = String.valueOf(this.f36404h);
        String valueOf4 = String.valueOf(this.f36405i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
