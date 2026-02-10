package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f17351a;

    /* renamed from: b  reason: collision with root package name */
    public final List f17352b;

    /* renamed from: c  reason: collision with root package name */
    public final List f17353c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f17354d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f17355e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f17356f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f17357a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f17358b;

        /* renamed from: c  reason: collision with root package name */
        private List f17359c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f17360d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f17361e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f17362f;

        public d a() {
            return new d(this.f17357a, this.f17358b, this.f17359c, this.f17360d, this.f17361e, this.f17362f);
        }

        public b b(int i10) {
            this.f17357a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f17362f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f17351a = i10;
        this.f17352b = list;
        this.f17353c = list2;
        this.f17354d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f17355e = z10;
        this.f17356f = z11;
    }
}
