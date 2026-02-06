package ii;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26720a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26721b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26722c;

    /* renamed from: d  reason: collision with root package name */
    private final long f26723d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26724e;

    /* renamed from: f  reason: collision with root package name */
    private final List f26725f;

    /* renamed from: g  reason: collision with root package name */
    private final List f26726g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f26727h;

    /* renamed from: i  reason: collision with root package name */
    private final List f26728i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f26720a = i10;
        this.f26721b = i11;
        this.f26722c = i12;
        this.f26723d = j10;
        this.f26724e = j11;
        this.f26725f = list;
        this.f26726g = list2;
        this.f26727h = pendingIntent;
        this.f26728i = list3;
    }

    @Override // ii.a
    public final long a() {
        return this.f26723d;
    }

    @Override // ii.a
    public final int b() {
        return this.f26722c;
    }

    @Override // ii.a
    public final PendingIntent c() {
        return this.f26727h;
    }

    @Override // ii.a
    public final int d() {
        return this.f26720a;
    }

    @Override // ii.a
    public final int e() {
        return this.f26721b;
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
            if (this.f26720a == aVar.d() && this.f26721b == aVar.e() && this.f26722c == aVar.b() && this.f26723d == aVar.a() && this.f26724e == aVar.f() && ((list = this.f26725f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f26726g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f26727h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f26728i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ii.a
    public final long f() {
        return this.f26724e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List g() {
        return this.f26726g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List h() {
        return this.f26725f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f26720a ^ 1000003) * 1000003) ^ this.f26721b) * 1000003) ^ this.f26722c;
        long j10 = this.f26723d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f26724e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f26725f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f26726g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f26727h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f26728i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.a
    public final List i() {
        return this.f26728i;
    }

    public final String toString() {
        int i10 = this.f26720a;
        int i11 = this.f26721b;
        int i12 = this.f26722c;
        long j10 = this.f26723d;
        long j11 = this.f26724e;
        String valueOf = String.valueOf(this.f26725f);
        String valueOf2 = String.valueOf(this.f26726g);
        String valueOf3 = String.valueOf(this.f26727h);
        String valueOf4 = String.valueOf(this.f26728i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
