package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f8498a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f8499b;

    /* renamed from: c  reason: collision with root package name */
    private final f f8500c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8501d;

    /* renamed from: e  reason: collision with root package name */
    private final i f8502e;

    /* renamed from: f  reason: collision with root package name */
    private final i f8503f;

    /* renamed from: g  reason: collision with root package name */
    private final int f8504g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f8505h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f8506i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f8507j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f8498a = camera;
        this.f8499b = cameraInfo;
        this.f8500c = fVar;
        this.f8501d = iVar;
        this.f8502e = iVar2;
        this.f8503f = iVar3;
        this.f8504g = i10;
        this.f8505h = cameraInfo.facing == 1;
        this.f8506i = z10;
        this.f8507j = z11;
    }

    public Camera a() {
        return this.f8498a;
    }

    public f b() {
        return this.f8500c;
    }

    public int c() {
        return this.f8504g;
    }

    public i d() {
        return this.f8501d;
    }

    public i e() {
        return this.f8502e;
    }

    public i f() {
        return this.f8503f;
    }

    public boolean g() {
        return this.f8506i;
    }

    public boolean h() {
        return this.f8507j;
    }

    public void i() {
        this.f8498a.release();
        this.f8500c.l();
    }

    public boolean j() {
        return this.f8505h;
    }
}
