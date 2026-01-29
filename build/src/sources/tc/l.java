package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface l extends le.j {
    int a(int i10);

    boolean c(byte[] bArr, int i10, int i11, boolean z10);

    void e();

    boolean f(byte[] bArr, int i10, int i11, boolean z10);

    long g();

    long getLength();

    long getPosition();

    void h(int i10);

    int i(byte[] bArr, int i10, int i11);

    void k(int i10);

    boolean l(int i10, boolean z10);

    void n(byte[] bArr, int i10, int i11);

    @Override // le.j
    int read(byte[] bArr, int i10, int i11);

    void readFully(byte[] bArr, int i10, int i11);
}
