package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f8111a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f8112b;

    /* renamed from: c  reason: collision with root package name */
    private int f8113c;

    /* renamed from: d  reason: collision with root package name */
    private int f8114d;

    /* renamed from: e  reason: collision with root package name */
    d f8115e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f8112b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f8114d) {
            return this.f8112b.getShort(this.f8113c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f8112b = byteBuffer;
        if (byteBuffer != null) {
            this.f8111a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f8113c = i11;
            this.f8114d = this.f8112b.getShort(i11);
            return;
        }
        this.f8111a = 0;
        this.f8113c = 0;
        this.f8114d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f8111a;
        return i11 + this.f8112b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f8111a;
        return this.f8112b.getInt(i11 + this.f8112b.getInt(i11));
    }
}
