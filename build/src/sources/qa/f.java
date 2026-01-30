package qa;

import java.io.IOException;
import java.io.InputStream;
import o8.j;
import o8.n;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f47062g;

    /* renamed from: h  reason: collision with root package name */
    private final r8.a f47063h;

    /* renamed from: c  reason: collision with root package name */
    private int f47058c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f47057b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f47059d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f47061f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f47060e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f47056a = 0;

    public f(r8.a aVar) {
        this.f47063h = (r8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f47060e;
        while (this.f47056a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f47058c;
                this.f47058c = i11 + 1;
                if (this.f47062g) {
                    this.f47056a = 6;
                    this.f47062g = false;
                    return false;
                }
                int i12 = this.f47056a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f47057b << 8) + read) - 2;
                                        w8.d.a(inputStream, i13);
                                        this.f47058c += i13;
                                        this.f47056a = 2;
                                    }
                                } else {
                                    this.f47056a = 5;
                                }
                            } else if (read == 255) {
                                this.f47056a = 3;
                            } else if (read == 0) {
                                this.f47056a = 2;
                            } else if (read == 217) {
                                this.f47062g = true;
                                f(i11 - 1);
                                this.f47056a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f47056a = 4;
                                } else {
                                    this.f47056a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f47056a = 3;
                        }
                    } else if (read == 216) {
                        this.f47056a = 2;
                    } else {
                        this.f47056a = 6;
                    }
                } else if (read == 255) {
                    this.f47056a = 1;
                } else {
                    this.f47056a = 6;
                }
                this.f47057b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f47056a == 6 || this.f47060e == i10) {
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
        int i11 = this.f47059d;
        if (i11 > 0) {
            this.f47061f = i10;
        }
        this.f47059d = i11 + 1;
        this.f47060e = i11;
    }

    public int c() {
        return this.f47061f;
    }

    public int d() {
        return this.f47060e;
    }

    public boolean e() {
        return this.f47062g;
    }

    public boolean g(k kVar) {
        if (this.f47056a == 6 || kVar.C0() <= this.f47058c) {
            return false;
        }
        r8.g gVar = new r8.g(kVar.V(), (byte[]) this.f47063h.get(16384), this.f47063h);
        try {
            w8.d.a(gVar, this.f47058c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            o8.b.b(gVar);
        }
    }
}
