package ei;

import android.app.PendingIntent;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final int f22798a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22799b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22800c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22801d;

    /* renamed from: e  reason: collision with root package name */
    private final long f22802e;

    /* renamed from: f  reason: collision with root package name */
    private final List f22803f;

    /* renamed from: g  reason: collision with root package name */
    private final List f22804g;

    /* renamed from: h  reason: collision with root package name */
    private final PendingIntent f22805h;

    /* renamed from: i  reason: collision with root package name */
    private final List f22806i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, int i12, long j10, long j11, List list, List list2, PendingIntent pendingIntent, List list3) {
        this.f22798a = i10;
        this.f22799b = i11;
        this.f22800c = i12;
        this.f22801d = j10;
        this.f22802e = j11;
        this.f22803f = list;
        this.f22804g = list2;
        this.f22805h = pendingIntent;
        this.f22806i = list3;
    }

    @Override // ei.a
    public final long a() {
        return this.f22801d;
    }

    @Override // ei.a
    public final int b() {
        return this.f22800c;
    }

    @Override // ei.a
    public final PendingIntent c() {
        return this.f22805h;
    }

    @Override // ei.a
    public final int d() {
        return this.f22798a;
    }

    @Override // ei.a
    public final int e() {
        return this.f22799b;
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
            if (this.f22798a == aVar.d() && this.f22799b == aVar.e() && this.f22800c == aVar.b() && this.f22801d == aVar.a() && this.f22802e == aVar.f() && ((list = this.f22803f) != null ? list.equals(aVar.h()) : aVar.h() == null) && ((list2 = this.f22804g) != null ? list2.equals(aVar.g()) : aVar.g() == null) && ((pendingIntent = this.f22805h) != null ? pendingIntent.equals(aVar.c()) : aVar.c() == null) && ((list3 = this.f22806i) != null ? list3.equals(aVar.i()) : aVar.i() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // ei.a
    public final long f() {
        return this.f22802e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List g() {
        return this.f22804g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List h() {
        return this.f22803f;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int i10 = ((((this.f22798a ^ 1000003) * 1000003) ^ this.f22799b) * 1000003) ^ this.f22800c;
        long j10 = this.f22801d;
        long j11 = j10 ^ (j10 >>> 32);
        long j12 = this.f22802e;
        long j13 = (j12 >>> 32) ^ j12;
        List list = this.f22803f;
        int i11 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int i12 = ((((((i10 * 1000003) ^ ((int) j11)) * 1000003) ^ ((int) j13)) * 1000003) ^ hashCode) * 1000003;
        List list2 = this.f22804g;
        if (list2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = list2.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        PendingIntent pendingIntent = this.f22805h;
        if (pendingIntent == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = pendingIntent.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list3 = this.f22806i;
        if (list3 != null) {
            i11 = list3.hashCode();
        }
        return i14 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ei.a
    public final List i() {
        return this.f22806i;
    }

    public final String toString() {
        int i10 = this.f22798a;
        int i11 = this.f22799b;
        int i12 = this.f22800c;
        long j10 = this.f22801d;
        long j11 = this.f22802e;
        String valueOf = String.valueOf(this.f22803f);
        String valueOf2 = String.valueOf(this.f22804g);
        String valueOf3 = String.valueOf(this.f22805h);
        String valueOf4 = String.valueOf(this.f22806i);
        return "SplitInstallSessionState{sessionId=" + i10 + ", status=" + i11 + ", errorCode=" + i12 + ", bytesDownloaded=" + j10 + ", totalBytesToDownload=" + j11 + ", moduleNamesNullable=" + valueOf + ", languagesNullable=" + valueOf2 + ", resolutionIntent=" + valueOf3 + ", splitFileIntents=" + valueOf4 + "}";
    }
}
