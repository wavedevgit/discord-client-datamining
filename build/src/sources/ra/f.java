package ra;

import java.io.IOException;
import java.io.InputStream;
import p8.j;
import p8.n;
import ta.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f47745g;

    /* renamed from: h  reason: collision with root package name */
    private final s8.a f47746h;

    /* renamed from: c  reason: collision with root package name */
    private int f47741c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f47740b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f47742d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f47744f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f47743e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f47739a = 0;

    public f(s8.a aVar) {
        this.f47746h = (s8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f47743e;
        while (this.f47739a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f47741c;
                this.f47741c = i11 + 1;
                if (this.f47745g) {
                    this.f47739a = 6;
                    this.f47745g = false;
                    return false;
                }
                int i12 = this.f47739a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f47740b << 8) + read) - 2;
                                        x8.d.a(inputStream, i13);
                                        this.f47741c += i13;
                                        this.f47739a = 2;
                                    }
                                } else {
                                    this.f47739a = 5;
                                }
                            } else if (read == 255) {
                                this.f47739a = 3;
                            } else if (read == 0) {
                                this.f47739a = 2;
                            } else if (read == 217) {
                                this.f47745g = true;
                                f(i11 - 1);
                                this.f47739a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f47739a = 4;
                                } else {
                                    this.f47739a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f47739a = 3;
                        }
                    } else if (read == 216) {
                        this.f47739a = 2;
                    } else {
                        this.f47739a = 6;
                    }
                } else if (read == 255) {
                    this.f47739a = 1;
                } else {
                    this.f47739a = 6;
                }
                this.f47740b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f47739a == 6 || this.f47743e == i10) {
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
        int i11 = this.f47742d;
        if (i11 > 0) {
            this.f47744f = i10;
        }
        this.f47742d = i11 + 1;
        this.f47743e = i11;
    }

    public int c() {
        return this.f47744f;
    }

    public int d() {
        return this.f47743e;
    }

    public boolean e() {
        return this.f47745g;
    }

    public boolean g(k kVar) {
        if (this.f47739a == 6 || kVar.Q() <= this.f47741c) {
            return false;
        }
        s8.g gVar = new s8.g(kVar.I(), (byte[]) this.f47746h.get(16384), this.f47746h);
        try {
            x8.d.a(gVar, this.f47741c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            p8.b.b(gVar);
        }
    }
}
