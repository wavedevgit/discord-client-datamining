package qa;

import java.io.IOException;
import java.io.InputStream;
import o8.j;
import o8.n;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: g  reason: collision with root package name */
    private boolean f47317g;

    /* renamed from: h  reason: collision with root package name */
    private final r8.a f47318h;

    /* renamed from: c  reason: collision with root package name */
    private int f47313c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f47312b = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f47314d = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f47316f = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f47315e = 0;

    /* renamed from: a  reason: collision with root package name */
    private int f47311a = 0;

    public f(r8.a aVar) {
        this.f47318h = (r8.a) j.g(aVar);
    }

    private boolean a(InputStream inputStream) {
        int read;
        int i10 = this.f47315e;
        while (this.f47311a != 6 && (read = inputStream.read()) != -1) {
            try {
                int i11 = this.f47313c;
                this.f47313c = i11 + 1;
                if (this.f47317g) {
                    this.f47311a = 6;
                    this.f47317g = false;
                    return false;
                }
                int i12 = this.f47311a;
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    if (i12 != 5) {
                                        j.i(false);
                                    } else {
                                        int i13 = ((this.f47312b << 8) + read) - 2;
                                        w8.d.a(inputStream, i13);
                                        this.f47313c += i13;
                                        this.f47311a = 2;
                                    }
                                } else {
                                    this.f47311a = 5;
                                }
                            } else if (read == 255) {
                                this.f47311a = 3;
                            } else if (read == 0) {
                                this.f47311a = 2;
                            } else if (read == 217) {
                                this.f47317g = true;
                                f(i11 - 1);
                                this.f47311a = 2;
                            } else {
                                if (read == 218) {
                                    f(i11 - 1);
                                }
                                if (b(read)) {
                                    this.f47311a = 4;
                                } else {
                                    this.f47311a = 2;
                                }
                            }
                        } else if (read == 255) {
                            this.f47311a = 3;
                        }
                    } else if (read == 216) {
                        this.f47311a = 2;
                    } else {
                        this.f47311a = 6;
                    }
                } else if (read == 255) {
                    this.f47311a = 1;
                } else {
                    this.f47311a = 6;
                }
                this.f47312b = read;
            } catch (IOException e10) {
                n.a(e10);
            }
        }
        if (this.f47311a == 6 || this.f47315e == i10) {
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
        int i11 = this.f47314d;
        if (i11 > 0) {
            this.f47316f = i10;
        }
        this.f47314d = i11 + 1;
        this.f47315e = i11;
    }

    public int c() {
        return this.f47316f;
    }

    public int d() {
        return this.f47315e;
    }

    public boolean e() {
        return this.f47317g;
    }

    public boolean g(k kVar) {
        if (this.f47311a == 6 || kVar.D0() <= this.f47313c) {
            return false;
        }
        r8.g gVar = new r8.g(kVar.V(), (byte[]) this.f47318h.get(16384), this.f47318h);
        try {
            w8.d.a(gVar, this.f47313c);
            return a(gVar);
        } catch (IOException e10) {
            n.a(e10);
            return false;
        } finally {
            o8.b.b(gVar);
        }
    }
}
