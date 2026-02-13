package ra;

import java.io.IOException;
import java.io.InputStream;
import p8.j;
import p8.n;
import ta.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f46768g;

    /* renamed from: h  reason: collision with root package name */
    private final s8.a f46769h;

    /* renamed from: c  reason: collision with root package name */
    private int f46764c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f46763b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f46765d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f46767f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f46766e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f46762a = 0;

    public f(s8.a aVar) {
        this.f46769h = (s8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f46766e;
        while (this.f46762a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f46764c;
                this.f46764c = i11 + 1;
                if (this.f46768g) {
                    this.f46762a = 6;
                    this.f46768g = false;
                    return false;
                }
                int i12 = this.f46762a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f46763b << 8) + read) - 2;
                                        x8.d.a(inputStream, i13);
                                        this.f46764c += i13;
                                        this.f46762a = 2;
                                    }
                                } else {
                                    this.f46762a = 5;
                                }
                            } else if (read == 255) {
                                this.f46762a = 3;
                            } else if (read == 0) {
                                this.f46762a = 2;
                            } else if (read == 217) {
                                this.f46768g = true;
                                f(i11 - 1);
                                this.f46762a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f46762a = 4;
                                } else {
                                    this.f46762a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f46762a = 3;
                        }
                    } else if (read == 216) {
                        this.f46762a = 2;
                    } else {
                        this.f46762a = 6;
                    }
                } else if (read == 255) {
                    this.f46762a = 1;
                } else {
                    this.f46762a = 6;
                }
                this.f46763b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f46762a == 6 || this.f46766e == i10) {
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
        int i11 = this.f46765d;
        if (i11 > 0) {
            this.f46767f = i10;
        }
        this.f46765d = i11 + 1;
        this.f46766e = i11;
    }

    public int c() {
        return this.f46767f;
    }

    public int d() {
        return this.f46766e;
    }

    public boolean e() {
        return this.f46768g;
    }

    public boolean g(k kVar) {
        if (this.f46762a == 6 || kVar.Q() <= this.f46764c) {
            return false;
        }
        s8.g gVar = new s8.g(kVar.I(), (byte[]) this.f46769h.get(16384), this.f46769h);
        try {
            x8.d.a(gVar, this.f46764c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            p8.b.b(gVar);
        }
    }
}
