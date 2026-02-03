package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f17869a;

    /* renamed from: b  reason: collision with root package name */
    public final List f17870b;

    /* renamed from: c  reason: collision with root package name */
    public final List f17871c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f17872d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f17873e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f17874f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f17875a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f17876b;

        /* renamed from: c  reason: collision with root package name */
        private List f17877c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f17878d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f17879e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f17880f;

        public d a() {
            return new d(this.f17875a, this.f17876b, this.f17877c, this.f17878d, this.f17879e, this.f17880f);
        }

        public b b(int i10) {
            this.f17875a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f17880f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f17869a = i10;
        this.f17870b = list;
        this.f17871c = list2;
        this.f17872d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f17873e = z10;
        this.f17874f = z11;
    }
}
