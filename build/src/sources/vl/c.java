package vl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import tl.f;
import ul.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final tl.e f52715a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f52716b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f52717c;

    /* renamed from: d  reason: collision with root package name */
    protected final nl.a f52718d;

    /* renamed from: e  reason: collision with root package name */
    protected final nl.b f52719e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f52720f;

    /* renamed from: g  reason: collision with root package name */
    protected int f52721g;

    /* renamed from: h  reason: collision with root package name */
    protected int f52722h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f52723i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f52724j;

    /* renamed from: k  reason: collision with root package name */
    protected long f52725k;

    /* renamed from: l  reason: collision with root package name */
    protected float f52726l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(tl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, nl.a aVar, nl.b bVar) {
        this.f52725k = -1L;
        this.f52715a = eVar;
        this.f52721g = i10;
        this.f52722h = i11;
        this.f52716b = fVar;
        this.f52724j = mediaFormat;
        this.f52717c = iVar;
        this.f52718d = aVar;
        this.f52719e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f52720f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f52725k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f52725k, selection.a());
            this.f52725k = min;
            this.f52725k = min - selection.b();
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
        while (this.f52715a.getSampleTrackIndex() == this.f52721g) {
            this.f52715a.advance();
            if ((this.f52715a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f52718d.getName();
    }

    public String d() {
        return this.f52719e.getName();
    }

    public float e() {
        return this.f52726l;
    }

    public MediaFormat f() {
        return this.f52724j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
