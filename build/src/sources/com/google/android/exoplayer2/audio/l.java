package com.google.android.exoplayer2.audio;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.exoplayer2.audio.k;
import java.math.RoundingMode;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements k.e {

    /* renamed from: b  reason: collision with root package name */
    protected final int f13001b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f13002c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f13003d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f13004e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f13005f;

    /* renamed from: g  reason: collision with root package name */
    public final int f13006g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13007a = 250000;

        /* renamed from: b  reason: collision with root package name */
        private int f13008b = 750000;

        /* renamed from: c  reason: collision with root package name */
        private int f13009c = 4;

        /* renamed from: d  reason: collision with root package name */
        private int f13010d = 250000;

        /* renamed from: e  reason: collision with root package name */
        private int f13011e = 50000000;

        /* renamed from: f  reason: collision with root package name */
        private int f13012f = 2;

        public l g() {
            return new l(this);
        }
    }

    protected l(a aVar) {
        this.f13001b = aVar.f13007a;
        this.f13002c = aVar.f13008b;
        this.f13003d = aVar.f13009c;
        this.f13004e = aVar.f13010d;
        this.f13005f = aVar.f13011e;
        this.f13006g = aVar.f13012f;
    }

    protected static int b(int i10, int i11, int i12) {
        return li.e.d(((i10 * i11) * i12) / 1000000);
    }

    protected static int d(int i10) {
        switch (i10) {
            case 5:
                return 80000;
            case 6:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return 768000;
            case 7:
                return 192000;
            case 8:
                return 2250000;
            case 9:
                return 40000;
            case 10:
                return 100000;
            case 11:
                return 16000;
            case 12:
                return 7000;
            case 13:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                throw new IllegalArgumentException();
            case 14:
                return 3062500;
            case 15:
                return 8000;
            case 16:
                return 256000;
            case 17:
                return 336000;
            case 20:
                return 63750;
        }
    }

    @Override // com.google.android.exoplayer2.audio.k.e
    public int a(int i10, int i11, int i12, int i13, int i14, int i15, double d10) {
        return (((Math.max(i10, (int) (c(i10, i11, i12, i13, i14, i15) * d10)) + i13) - 1) / i13) * i13;
    }

    protected int c(int i10, int i11, int i12, int i13, int i14, int i15) {
        if (i12 != 0) {
            if (i12 != 1) {
                if (i12 == 2) {
                    return f(i11, i15);
                }
                throw new IllegalArgumentException();
            }
            return e(i11);
        }
        return g(i10, i14, i13);
    }

    protected int e(int i10) {
        return li.e.d((this.f13005f * d(i10)) / 1000000);
    }

    protected int f(int i10, int i11) {
        int d10;
        int i12 = this.f13004e;
        if (i10 == 5) {
            i12 *= this.f13006g;
        }
        if (i11 != -1) {
            d10 = ki.b.a(i11, 8, RoundingMode.CEILING);
        } else {
            d10 = d(i10);
        }
        return li.e.d((i12 * d10) / 1000000);
    }

    protected int g(int i10, int i11, int i12) {
        return w0.q(i10 * this.f13003d, b(this.f13001b, i11, i12), b(this.f13002c, i11, i12));
    }
}
