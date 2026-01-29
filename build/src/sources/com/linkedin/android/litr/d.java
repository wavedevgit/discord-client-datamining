package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f18240a;

    /* renamed from: b  reason: collision with root package name */
    public final List f18241b;

    /* renamed from: c  reason: collision with root package name */
    public final List f18242c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f18243d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f18244e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f18245f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f18246a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f18247b;

        /* renamed from: c  reason: collision with root package name */
        private List f18248c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f18249d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f18250e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f18251f;

        public d a() {
            return new d(this.f18246a, this.f18247b, this.f18248c, this.f18249d, this.f18250e, this.f18251f);
        }

        public b b(int i10) {
            this.f18246a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f18251f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f18240a = i10;
        this.f18241b = list;
        this.f18242c = list2;
        this.f18243d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f18244e = z10;
        this.f18245f = z11;
    }
}
