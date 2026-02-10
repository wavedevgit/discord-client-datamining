package yl;

import android.media.MediaFormat;
import com.linkedin.android.litr.io.MediaRange;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected final wl.e f55612a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f55613b;

    /* renamed from: c  reason: collision with root package name */
    protected final i f55614c;

    /* renamed from: d  reason: collision with root package name */
    protected final ql.a f55615d;

    /* renamed from: e  reason: collision with root package name */
    protected final ql.b f55616e;

    /* renamed from: f  reason: collision with root package name */
    protected final MediaRange f55617f;

    /* renamed from: g  reason: collision with root package name */
    protected int f55618g;

    /* renamed from: h  reason: collision with root package name */
    protected int f55619h;

    /* renamed from: i  reason: collision with root package name */
    protected boolean f55620i;

    /* renamed from: j  reason: collision with root package name */
    protected MediaFormat f55621j;

    /* renamed from: k  reason: collision with root package name */
    protected long f55622k;

    /* renamed from: l  reason: collision with root package name */
    protected float f55623l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        this.f55622k = -1L;
        this.f55612a = eVar;
        this.f55618g = i10;
        this.f55619h = i11;
        this.f55613b = fVar;
        this.f55621j = mediaFormat;
        this.f55614c = iVar;
        this.f55615d = aVar;
        this.f55616e = bVar;
        MediaRange selection = eVar.getSelection();
        this.f55617f = selection;
        MediaFormat trackFormat = eVar.getTrackFormat(i10);
        if (trackFormat.containsKey("durationUs")) {
            long j10 = trackFormat.getLong("durationUs");
            this.f55622k = j10;
            if (mediaFormat != null) {
                mediaFormat.setLong("durationUs", j10);
            }
        }
        if (selection.a() >= selection.b()) {
            long min = Math.min(this.f55622k, selection.a());
            this.f55622k = min;
            this.f55622k = min - selection.b();
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
        while (this.f55612a.getSampleTrackIndex() == this.f55618g) {
            this.f55612a.advance();
            if ((this.f55612a.getSampleFlags() & 4) != 0) {
                return 4;
            }
        }
        return 5;
    }

    public String c() {
        return this.f55615d.getName();
    }

    public String d() {
        return this.f55616e.getName();
    }

    public float e() {
        return this.f55623l;
    }

    public MediaFormat f() {
        return this.f55621j;
    }

    public abstract int g();

    public abstract void h();

    public abstract void i();
}
