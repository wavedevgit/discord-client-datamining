package ei;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f21657d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f21658e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f21657d = pendingIntent;
            this.f21658e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // ei.b
    final PendingIntent a() {
        return this.f21657d;
    }

    @Override // ei.b
    final boolean b() {
        return this.f21658e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f21657d.equals(bVar.a()) && this.f21658e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f21657d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f21658e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f21657d.toString();
        boolean z10 = this.f21658e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
