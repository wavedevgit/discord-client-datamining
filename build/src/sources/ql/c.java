package ql;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import ol.f;
import pl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final ol.e f47499a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f47500b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f47501c;

    /* renamed from: d  reason: collision with root package name */
    protected final il.a f47502d;

    /* renamed from: e  reason: collision with root package name */
    protected final il.b f47503e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f47504f;

    /* renamed from: g  reason: collision with root package name */
    protected int f47505g;

    /* renamed from: h  reason: collision with root package name */
    protected int f47506h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f47507i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f47508j;

    /* renamed from: k  reason: collision with root package name */
    protected long f47509k;

    /* renamed from: l  reason: collision with root package name */
    protected float f47510l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        this.f47509k = -1L;
        this.f47499a = eVar;
        this.f47505g = i10;
        this.f47506h = i11;
        this.f47500b = fVar;
        this.f47508j = mediaFormat;
        this.f47501c = iVar;
        this.f47502d = aVar;
        this.f47503e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f47504f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f47509k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f47509k, selection.a());
            this.f47509k = min;
            this.f47509k = min - selection.b();
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
        while (this.f47499a.getSampleTrackIndex() == this.f47505g) {
            this.f47499a.advance();
            if ((this.f47499a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f47502d.getName();
    }

    public String d() {
        return this.f47503e.getName();
    }

    public float e() {
        return this.f47510l;
    }

    public MediaFormat f() {
        return this.f47508j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
