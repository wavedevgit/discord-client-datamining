package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f7217a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f7218b;

    /* renamed from: c  reason: collision with root package name */
    private int f7219c;

    /* renamed from: d  reason: collision with root package name */
    private int f7220d;

    /* renamed from: e  reason: collision with root package name */
    d f7221e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f7218b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f7220d) {
            return this.f7218b.getShort(this.f7219c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f7218b = byteBuffer;
        if (byteBuffer != null) {
            this.f7217a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f7219c = i11;
            this.f7220d = this.f7218b.getShort(i11);
            return;
        }
        this.f7217a = 0;
        this.f7219c = 0;
        this.f7220d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f7217a;
        return i11 + this.f7218b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f7217a;
        return this.f7218b.getInt(i11 + this.f7218b.getInt(i11));
    }
}
