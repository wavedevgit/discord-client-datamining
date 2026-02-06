package qa;

import java.io.IOException;
import java.io.InputStream;
import o8.j;
import o8.n;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f46579g;

    /* renamed from: h  reason: collision with root package name */
    private final r8.a f46580h;

    /* renamed from: c  reason: collision with root package name */
    private int f46575c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f46574b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f46576d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f46578f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f46577e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f46573a = 0;

    public f(r8.a aVar) {
        this.f46580h = (r8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f46577e;
        while (this.f46573a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f46575c;
                this.f46575c = i11 + 1;
                if (this.f46579g) {
                    this.f46573a = 6;
                    this.f46579g = false;
                    return false;
                }
                int i12 = this.f46573a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f46574b << 8) + read) - 2;
                                        w8.d.a(inputStream, i13);
                                        this.f46575c += i13;
                                        this.f46573a = 2;
                                    }
                                } else {
                                    this.f46573a = 5;
                                }
                            } else if (read == 255) {
                                this.f46573a = 3;
                            } else if (read == 0) {
                                this.f46573a = 2;
                            } else if (read == 217) {
                                this.f46579g = true;
                                f(i11 - 1);
                                this.f46573a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f46573a = 4;
                                } else {
                                    this.f46573a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f46573a = 3;
                        }
                    } else if (read == 216) {
                        this.f46573a = 2;
                    } else {
                        this.f46573a = 6;
                    }
                } else if (read == 255) {
                    this.f46573a = 1;
                } else {
                    this.f46573a = 6;
                }
                this.f46574b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f46573a == 6 || this.f46577e == i10) {
            return false;
        }
        return true;
    }

    private static boolean b(int i10) {
        if (i10 == 1) {
            return false;
        }
        if ((i10 >= 208 && i10 <= 215) || i10 == 217 || i10 == 216) {
            return false;
        }
        return true;
    }

    private void f(int i10) {
        int i11 = this.f46576d;
        if (i11 > 0) {
            this.f46578f = i10;
        }
        this.f46576d = i11 + 1;
        this.f46577e = i11;
    }

    public int c() {
        return this.f46578f;
    }

    public int d() {
        return this.f46577e;
    }

    public boolean e() {
        return this.f46579g;
    }

    public boolean g(k kVar) {
        if (this.f46573a == 6 || kVar.P() <= this.f46575c) {
            return false;
        }
        r8.g gVar = new r8.g(kVar.I(), (byte[]) this.f46580h.get(16384), this.f46580h);
        try {
            w8.d.a(gVar, this.f46575c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            o8.b.b(gVar);
        }
    }
}
