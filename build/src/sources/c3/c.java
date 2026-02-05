package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f7372a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f7373b;

    /* renamed from: c  reason: collision with root package name */
    private int f7374c;

    /* renamed from: d  reason: collision with root package name */
    private int f7375d;

    /* renamed from: e  reason: collision with root package name */
    d f7376e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f7373b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f7375d) {
            return this.f7373b.getShort(this.f7374c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f7373b = byteBuffer;
        if (byteBuffer != null) {
            this.f7372a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f7374c = i11;
            this.f7375d = this.f7373b.getShort(i11);
            return;
        }
        this.f7372a = 0;
        this.f7374c = 0;
        this.f7375d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f7372a;
        return i11 + this.f7373b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f7372a;
        return this.f7373b.getInt(i11 + this.f7373b.getInt(i11));
    }
}
