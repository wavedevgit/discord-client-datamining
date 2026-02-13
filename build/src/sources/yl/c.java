package yl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final wl.e f56181a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f56182b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f56183c;

    /* renamed from: d  reason: collision with root package name */
    protected final ql.a f56184d;

    /* renamed from: e  reason: collision with root package name */
    protected final ql.b f56185e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f56186f;

    /* renamed from: g  reason: collision with root package name */
    protected int f56187g;

    /* renamed from: h  reason: collision with root package name */
    protected int f56188h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f56189i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f56190j;

    /* renamed from: k  reason: collision with root package name */
    protected long f56191k;

    /* renamed from: l  reason: collision with root package name */
    protected float f56192l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        this.f56191k = -1L;
        this.f56181a = eVar;
        this.f56187g = i10;
        this.f56188h = i11;
        this.f56182b = fVar;
        this.f56190j = mediaFormat;
        this.f56183c = iVar;
        this.f56184d = aVar;
        this.f56185e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f56186f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f56191k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f56191k, selection.a());
            this.f56191k = min;
            this.f56191k = min - selection.b();
            return;
        }
        throw new IllegalArgumentException("Range end should be greater than range start");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public MediaFormat a(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        if (!mediaFormat2.containsKey("durationUs") && mediaFormat.containsKey("durationUs")) {
            mediaFormat2.setLong("durationUs", mediaFormat.getLong("durationUs"));
        }
        if (!mediaFormat2.containsKey("language") && mediaFormat.containsKey("language")) {
            mediaFormat2.setString("language", mediaFormat.getString("language"));
        }
        return mediaFormat2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b() {
        while (this.f56181a.getSampleTrackIndex() == this.f56187g) {
            this.f56181a.advance();
            if ((this.f56181a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f56184d.getName();
    }

    public String d() {
        return this.f56185e.getName();
    }

    public float e() {
        return this.f56192l;
    }

    public MediaFormat f() {
        return this.f56190j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
