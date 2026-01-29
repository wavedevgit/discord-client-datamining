package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f31676a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31677b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f31678c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f31676a = i10;
        this.f31677b = i11;
        if (aVar != null) {
            this.f31678c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f31678c;
    }

    @Override // j0.t.b
    int b() {
        return this.f31676a;
    }

    @Override // j0.t.b
    int c() {
        return this.f31677b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f31676a == bVar.b() && this.f31677b == bVar.c() && this.f31678c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f31676a ^ 1000003) * 1000003) ^ this.f31677b) * 1000003) ^ this.f31678c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f31676a + ", rotationDegrees=" + this.f31677b + ", completer=" + this.f31678c + "}";
    }
}
