package ql;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import ol.f;
import pl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final ol.e f47515a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f47516b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f47517c;

    /* renamed from: d  reason: collision with root package name */
    protected final il.a f47518d;

    /* renamed from: e  reason: collision with root package name */
    protected final il.b f47519e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f47520f;

    /* renamed from: g  reason: collision with root package name */
    protected int f47521g;

    /* renamed from: h  reason: collision with root package name */
    protected int f47522h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f47523i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f47524j;

    /* renamed from: k  reason: collision with root package name */
    protected long f47525k;

    /* renamed from: l  reason: collision with root package name */
    protected float f47526l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        this.f47525k = -1L;
        this.f47515a = eVar;
        this.f47521g = i10;
        this.f47522h = i11;
        this.f47516b = fVar;
        this.f47524j = mediaFormat;
        this.f47517c = iVar;
        this.f47518d = aVar;
        this.f47519e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f47520f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f47525k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f47525k, selection.a());
            this.f47525k = min;
            this.f47525k = min - selection.b();
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
        while (this.f47515a.getSampleTrackIndex() == this.f47521g) {
            this.f47515a.advance();
            if ((this.f47515a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f47518d.getName();
    }

    public String d() {
        return this.f47519e.getName();
    }

    public float e() {
        return this.f47526l;
    }

    public MediaFormat f() {
        return this.f47524j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
