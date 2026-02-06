package com.budiyev.android.codescanner;

import android.hardware.Camera;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Camera f8358a;

    /* renamed from: b  reason: collision with root package name */
    private final Camera.CameraInfo f8359b;

    /* renamed from: c  reason: collision with root package name */
    private final f f8360c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8361d;

    /* renamed from: e  reason: collision with root package name */
    private final i f8362e;

    /* renamed from: f  reason: collision with root package name */
    private final i f8363f;

    /* renamed from: g  reason: collision with root package name */
    private final int f8364g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f8365h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f8366i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f8367j;

    public g(Camera camera, Camera.CameraInfo cameraInfo, f fVar, i iVar, i iVar2, i iVar3, int i10, boolean z10, boolean z11) {
        this.f8358a = camera;
        this.f8359b = cameraInfo;
        this.f8360c = fVar;
        this.f8361d = iVar;
        this.f8362e = iVar2;
        this.f8363f = iVar3;
        this.f8364g = i10;
        this.f8365h = cameraInfo.facing == 1;
        this.f8366i = z10;
        this.f8367j = z11;
    }

    public Camera a() {
        return this.f8358a;
    }

    public f b() {
        return this.f8360c;
    }

    public int c() {
        return this.f8364g;
    }

    public i d() {
        return this.f8361d;
    }

    public i e() {
        return this.f8362e;
    }

    public i f() {
        return this.f8363f;
    }

    public boolean g() {
        return this.f8366i;
    }

    public boolean h() {
        return this.f8367j;
    }

    public void i() {
        this.f8358a.release();
        this.f8360c.l();
    }

    public boolean j() {
        return this.f8365h;
    }
}
