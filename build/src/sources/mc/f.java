package mc;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import com.google.android.exoplayer2.audio.k;
import com.google.android.exoplayer2.v1;
import gd.l;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements s0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f36876a;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36880e;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36882g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36883h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f36884i;

    /* renamed from: b  reason: collision with root package name */
    private final gd.j f36877b = new gd.j();

    /* renamed from: c  reason: collision with root package name */
    private int f36878c = 0;

    /* renamed from: d  reason: collision with root package name */
    private long f36879d = 5000;

    /* renamed from: f  reason: collision with root package name */
    private gd.t f36881f = gd.t.f24244a;

    public f(Context context) {
        this.f36876a = context;
    }

    @Override // mc.s0
    public v1[] a(Handler handler, pe.y yVar, com.google.android.exoplayer2.audio.e eVar, ae.m mVar, hd.d dVar) {
        Handler handler2;
        ArrayList arrayList = new ArrayList();
        h(this.f36876a, this.f36878c, this.f36881f, this.f36880e, handler, yVar, this.f36879d, arrayList);
        com.google.android.exoplayer2.audio.f c10 = c(this.f36876a, this.f36882g, this.f36883h, this.f36884i);
        if (c10 != null) {
            handler2 = handler;
            b(this.f36876a, this.f36878c, this.f36881f, this.f36880e, c10, handler2, eVar, arrayList);
        } else {
            handler2 = handler;
        }
        g(this.f36876a, mVar, handler2.getLooper(), this.f36878c, arrayList);
        e(this.f36876a, dVar, handler2.getLooper(), this.f36878c, arrayList);
        d(this.f36876a, this.f36878c, arrayList);
        f(this.f36876a, handler2, this.f36878c, arrayList);
        return (v1[]) arrayList.toArray(new v1[0]);
    }

    protected void b(Context context, int i10, gd.t tVar, boolean z10, com.google.android.exoplayer2.audio.f fVar, Handler handler, com.google.android.exoplayer2.audio.e eVar, ArrayList arrayList) {
        int i11;
        int i12;
        arrayList.add(new com.google.android.exoplayer2.audio.m(context, j(), tVar, z10, handler, eVar, fVar));
        if (i10 != 0) {
            int size = arrayList.size();
            if (i10 == 2) {
                size--;
            }
            try {
                try {
                    i11 = size + 1;
                } catch (ClassNotFoundException unused) {
                }
                try {
                    arrayList.add(size, (v1) Class.forName("com.google.android.exoplayer2.decoder.midi.MidiRenderer").getConstructor(null).newInstance(null));
                    oe.y.f("DefaultRenderersFactory", "Loaded MidiRenderer.");
                } catch (ClassNotFoundException unused2) {
                    size = i11;
                    i11 = size;
                    try {
                        i12 = i11 + 1;
                        try {
                            try {
                                arrayList.add(i11, (v1) Class.forName("com.google.android.exoplayer2.ext.opus.LibopusAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                                oe.y.f("DefaultRenderersFactory", "Loaded LibopusAudioRenderer.");
                            } catch (ClassNotFoundException unused3) {
                                i11 = i12;
                                i12 = i11;
                                int i13 = i12 + 1;
                                arrayList.add(i12, (v1) Class.forName("com.google.android.exoplayer2.ext.flac.LibflacAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                                oe.y.f("DefaultRenderersFactory", "Loaded LibflacAudioRenderer.");
                                arrayList.add(i13, (v1) Class.forName("com.google.android.exoplayer2.ext.ffmpeg.FfmpegAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                                oe.y.f("DefaultRenderersFactory", "Loaded FfmpegAudioRenderer.");
                            }
                            int i132 = i12 + 1;
                            try {
                                arrayList.add(i12, (v1) Class.forName("com.google.android.exoplayer2.ext.flac.LibflacAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                                oe.y.f("DefaultRenderersFactory", "Loaded LibflacAudioRenderer.");
                            } catch (ClassNotFoundException unused4) {
                                i12 = i132;
                                i132 = i12;
                                arrayList.add(i132, (v1) Class.forName("com.google.android.exoplayer2.ext.ffmpeg.FfmpegAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                                oe.y.f("DefaultRenderersFactory", "Loaded FfmpegAudioRenderer.");
                            }
                            arrayList.add(i132, (v1) Class.forName("com.google.android.exoplayer2.ext.ffmpeg.FfmpegAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                            oe.y.f("DefaultRenderersFactory", "Loaded FfmpegAudioRenderer.");
                        } catch (Exception e10) {
                            throw new RuntimeException("Error instantiating FLAC extension", e10);
                        }
                    } catch (Exception e11) {
                        throw new RuntimeException("Error instantiating Opus extension", e11);
                    }
                }
                try {
                    i12 = i11 + 1;
                    arrayList.add(i11, (v1) Class.forName("com.google.android.exoplayer2.ext.opus.LibopusAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                    oe.y.f("DefaultRenderersFactory", "Loaded LibopusAudioRenderer.");
                } catch (ClassNotFoundException unused5) {
                }
                try {
                    int i1322 = i12 + 1;
                    arrayList.add(i12, (v1) Class.forName("com.google.android.exoplayer2.ext.flac.LibflacAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                    oe.y.f("DefaultRenderersFactory", "Loaded LibflacAudioRenderer.");
                } catch (ClassNotFoundException unused6) {
                }
                try {
                    arrayList.add(i1322, (v1) Class.forName("com.google.android.exoplayer2.ext.ffmpeg.FfmpegAudioRenderer").getConstructor(Handler.class, com.google.android.exoplayer2.audio.e.class, com.google.android.exoplayer2.audio.f.class).newInstance(handler, eVar, fVar));
                    oe.y.f("DefaultRenderersFactory", "Loaded FfmpegAudioRenderer.");
                } catch (ClassNotFoundException unused7) {
                } catch (Exception e12) {
                    throw new RuntimeException("Error instantiating FFmpeg extension", e12);
                }
            } catch (Exception e13) {
                throw new RuntimeException("Error instantiating MIDI extension", e13);
            }
        }
    }

    protected com.google.android.exoplayer2.audio.f c(Context context, boolean z10, boolean z11, boolean z12) {
        return new k.f(context).i(z10).h(z11).j(z12 ? 1 : 0).g();
    }

    protected void d(Context context, int i10, ArrayList arrayList) {
        arrayList.add(new qe.b());
    }

    protected void e(Context context, hd.d dVar, Looper looper, int i10, ArrayList arrayList) {
        arrayList.add(new com.google.android.exoplayer2.metadata.a(dVar, looper));
    }

    protected void g(Context context, ae.m mVar, Looper looper, int i10, ArrayList arrayList) {
        arrayList.add(new ae.n(mVar, looper));
    }

    protected void h(Context context, int i10, gd.t tVar, boolean z10, Handler handler, pe.y yVar, long j10, ArrayList arrayList) {
        String str;
        Integer num;
        int i11;
        Class cls = Integer.TYPE;
        Class cls2 = Long.TYPE;
        arrayList.add(new pe.h(context, j(), tVar, j10, z10, handler, yVar, 50));
        if (i10 != 0) {
            int size = arrayList.size();
            if (i10 == 2) {
                size--;
            }
            try {
                try {
                    Constructor<?> constructor = Class.forName("com.google.android.exoplayer2.ext.vp9.LibvpxVideoRenderer").getConstructor(cls2, Handler.class, pe.y.class, cls);
                    num = 50;
                    try {
                        i11 = size + 1;
                        try {
                            arrayList.add(size, (v1) constructor.newInstance(Long.valueOf(j10), handler, yVar, 50));
                            str = "DefaultRenderersFactory";
                        } catch (ClassNotFoundException unused) {
                            str = "DefaultRenderersFactory";
                        }
                    } catch (ClassNotFoundException unused2) {
                        str = "DefaultRenderersFactory";
                    }
                } catch (ClassNotFoundException unused3) {
                    str = "DefaultRenderersFactory";
                    num = 50;
                }
                try {
                    oe.y.f(str, "Loaded LibvpxVideoRenderer.");
                } catch (ClassNotFoundException unused4) {
                    size = i11;
                    i11 = size;
                    arrayList.add(i11, (v1) Class.forName("com.google.android.exoplayer2.ext.av1.Libgav1VideoRenderer").getConstructor(cls2, Handler.class, pe.y.class, cls).newInstance(Long.valueOf(j10), handler, yVar, num));
                    oe.y.f(str, "Loaded Libgav1VideoRenderer.");
                }
                try {
                    arrayList.add(i11, (v1) Class.forName("com.google.android.exoplayer2.ext.av1.Libgav1VideoRenderer").getConstructor(cls2, Handler.class, pe.y.class, cls).newInstance(Long.valueOf(j10), handler, yVar, num));
                    oe.y.f(str, "Loaded Libgav1VideoRenderer.");
                } catch (ClassNotFoundException unused5) {
                } catch (Exception e10) {
                    throw new RuntimeException("Error instantiating AV1 extension", e10);
                }
            } catch (Exception e11) {
                throw new RuntimeException("Error instantiating VP9 extension", e11);
            }
        }
    }

    public f i() {
        this.f36877b.b();
        return this;
    }

    protected l.b j() {
        return this.f36877b;
    }

    public f k(boolean z10) {
        this.f36880e = z10;
        return this;
    }

    public f l(int i10) {
        this.f36878c = i10;
        return this;
    }

    protected void f(Context context, Handler handler, int i10, ArrayList arrayList) {
    }
}
