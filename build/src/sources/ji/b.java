package ji;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f30172a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30173b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30174c;

    /* renamed from: d  reason: collision with root package name */
    private final long f30175d;

    /* renamed from: e  reason: collision with root package name */
    private final long f30176e;

    /* renamed from: f  reason: collision with root package name */
    private final List f30177f;

    /* renamed from: g  reason: collision with root package name */
    private final List f30178g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f30179h;

    /* renamed from: i  reason: collision with root package name */
    private final List f30180i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f30172a = i10;
        this.f30173b = i11;
        this.f30174c = i12;
        this.f30175d = j10;
        this.f30176e = j11;
        this.f30177f = list;
        this.f30178g = list2;
        this.f30179h = pendingIntent;
        this.f30180i = list3;
    }

    @Override // ji.a
    public final long a() {
        return this.f30175d;
    }

    @Override // ji.a
    public final int b() {
        return this.f30174c;
    }

    @Override // ji.a
    public final PendingIntent c() {
        return this.f30179h;
    }

    @Override // ji.a
    public final int d() {
        return this.f30172a;
    }

    @Override // ji.a
    public final int e() {
        return this.f30173b;
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
            if (this.f30172a == aVar.d() && this.f30173b == aVar.e() && this.f30174c == aVar.b() && this.f30175d == aVar.a() && this.f30176e == aVar.f() && ((list = this.f30177f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f30178g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f30179h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f30180i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ji.a
    public final long f() {
        return this.f30176e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.a
    public final List g() {
        return this.f30178g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.a
    public final List h() {
        return this.f30177f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f30172a ^ 1000003) * 1000003) ^ this.f30173b) * 1000003) ^ this.f30174c;
        long j10 = this.f30175d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f30176e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f30177f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f30178g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f30179h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f30180i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.a
    public final List i() {
        return this.f30180i;
    }

    public final String toString() {
        int i10 = this.f30172a;
        int i11 = this.f30173b;
        int i12 = this.f30174c;
        long j10 = this.f30175d;
        long j11 = this.f30176e;
        String valueOf = String.valueOf(this.f30177f);
        String valueOf2 = String.valueOf(this.f30178g);
        String valueOf3 = String.valueOf(this.f30179h);
        String valueOf4 = String.valueOf(this.f30180i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
