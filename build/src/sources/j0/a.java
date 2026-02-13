package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f31219a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31220b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f31221c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f31219a = i10;
        this.f31220b = i11;
        if (aVar != null) {
            this.f31221c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f31221c;
    }

    @Override // j0.t.b
    int b() {
        return this.f31219a;
    }

    @Override // j0.t.b
    int c() {
        return this.f31220b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f31219a == bVar.b() && this.f31220b == bVar.c() && this.f31221c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f31219a ^ 1000003) * 1000003) ^ this.f31220b) * 1000003) ^ this.f31221c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f31219a + ", rotationDegrees=" + this.f31220b + ", completer=" + this.f31221c + "}";
    }
}
