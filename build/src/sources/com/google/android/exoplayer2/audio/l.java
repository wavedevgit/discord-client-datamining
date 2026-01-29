package com.google.android.exoplayer2.audio;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.exoplayer2.audio.k;
import java.math.RoundingMode;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements k.e {

    /* renamed from: b  reason: collision with root package name */
    protected final int f13372b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f13373c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f13374d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f13375e;

    /* renamed from: f  reason: collision with root package name */
    protected final int f13376f;

    /* renamed from: g  reason: collision with root package name */
    public final int f13377g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13378a = 250000;

        /* renamed from: b  reason: collision with root package name */
        private int f13379b = 750000;

        /* renamed from: c  reason: collision with root package name */
        private int f13380c = 4;

        /* renamed from: d  reason: collision with root package name */
        private int f13381d = 250000;

        /* renamed from: e  reason: collision with root package name */
        private int f13382e = 50000000;

        /* renamed from: f  reason: collision with root package name */
        private int f13383f = 2;

        public l g() {
            return new l(this);
        }
    }

    protected l(a aVar) {
        this.f13372b = aVar.f13378a;
        this.f13373c = aVar.f13379b;
        this.f13374d = aVar.f13380c;
        this.f13375e = aVar.f13381d;
        this.f13376f = aVar.f13382e;
        this.f13377g = aVar.f13383f;
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
        return li.e.d((this.f13376f * d(i10)) / 1000000);
    }

    protected int f(int i10, int i11) {
        int d10;
        int i12 = this.f13375e;
        if (i10 == 5) {
            i12 *= this.f13377g;
        }
        if (i11 != -1) {
            d10 = ki.b.a(i11, 8, RoundingMode.CEILING);
        } else {
            d10 = d(i10);
        }
        return li.e.d((i12 * d10) / 1000000);
    }

    protected int g(int i10, int i11, int i12) {
        return w0.q(i10 * this.f13374d, b(this.f13372b, i11, i12), b(this.f13373c, i11, i12));
    }
}
