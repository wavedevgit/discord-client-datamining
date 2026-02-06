package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f17592a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17593b;

    /* renamed from: c  reason: collision with root package name */
    private final String f17594c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f17595d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f17592a = instance;
        this.f17593b = path;
        this.f17594c = propertyType;
        this.f17595d = job;
    }

    public final ViewModelInstance a() {
        return this.f17592a;
    }

    public final Job b() {
        return this.f17595d;
    }

    public final String c() {
        return this.f17593b;
    }

    public final String d() {
        return this.f17594c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f17592a, bVar.f17592a) && Intrinsics.areEqual(this.f17593b, bVar.f17593b) && Intrinsics.areEqual(this.f17594c, bVar.f17594c) && Intrinsics.areEqual(this.f17595d, bVar.f17595d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f17592a.hashCode() * 31) + this.f17593b.hashCode()) * 31) + this.f17594c.hashCode()) * 31) + this.f17595d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f17592a;
        String str = this.f17593b;
        String str2 = this.f17594c;
        Job job = this.f17595d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
