package qa;

import java.io.IOException;
import java.io.InputStream;
import o8.j;
import o8.n;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f47531g;

    /* renamed from: h  reason: collision with root package name */
    private final r8.a f47532h;

    /* renamed from: c  reason: collision with root package name */
    private int f47527c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f47526b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f47528d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f47530f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f47529e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f47525a = 0;

    public f(r8.a aVar) {
        this.f47532h = (r8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f47529e;
        while (this.f47525a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f47527c;
                this.f47527c = i11 + 1;
                if (this.f47531g) {
                    this.f47525a = 6;
                    this.f47531g = false;
                    return false;
                }
                int i12 = this.f47525a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f47526b << 8) + read) - 2;
                                        w8.d.a(inputStream, i13);
                                        this.f47527c += i13;
                                        this.f47525a = 2;
                                    }
                                } else {
                                    this.f47525a = 5;
                                }
                            } else if (read == 255) {
                                this.f47525a = 3;
                            } else if (read == 0) {
                                this.f47525a = 2;
                            } else if (read == 217) {
                                this.f47531g = true;
                                f(i11 - 1);
                                this.f47525a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f47525a = 4;
                                } else {
                                    this.f47525a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f47525a = 3;
                        }
                    } else if (read == 216) {
                        this.f47525a = 2;
                    } else {
                        this.f47525a = 6;
                    }
                } else if (read == 255) {
                    this.f47525a = 1;
                } else {
                    this.f47525a = 6;
                }
                this.f47526b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f47525a == 6 || this.f47529e == i10) {
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
        int i11 = this.f47528d;
        if (i11 > 0) {
            this.f47530f = i10;
        }
        this.f47528d = i11 + 1;
        this.f47529e = i11;
    }

    public int c() {
        return this.f47530f;
    }

    public int d() {
        return this.f47529e;
    }

    public boolean e() {
        return this.f47531g;
    }

    public boolean g(k kVar) {
        if (this.f47525a == 6 || kVar.C0() <= this.f47527c) {
            return false;
        }
        r8.g gVar = new r8.g(kVar.V(), (byte[]) this.f47532h.get(16384), this.f47532h);
        try {
            w8.d.a(gVar, this.f47527c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            o8.b.b(gVar);
        }
    }
}
