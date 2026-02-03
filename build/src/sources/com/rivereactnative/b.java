package com.rivereactnative;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ViewModelInstance f17206a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17207b;

    /* renamed from: c  reason: collision with root package name */
    private final String f17208c;

    /* renamed from: d  reason: collision with root package name */
    private final Job f17209d;

    public b(ViewModelInstance instance, String path, String propertyType, Job job) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f17206a = instance;
        this.f17207b = path;
        this.f17208c = propertyType;
        this.f17209d = job;
    }

    public final ViewModelInstance a() {
        return this.f17206a;
    }

    public final Job b() {
        return this.f17209d;
    }

    public final String c() {
        return this.f17207b;
    }

    public final String d() {
        return this.f17208c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f17206a, bVar.f17206a) && Intrinsics.areEqual(this.f17207b, bVar.f17207b) && Intrinsics.areEqual(this.f17208c, bVar.f17208c) && Intrinsics.areEqual(this.f17209d, bVar.f17209d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f17206a.hashCode() * 31) + this.f17207b.hashCode()) * 31) + this.f17208c.hashCode()) * 31) + this.f17209d.hashCode();
    }

    public String toString() {
        ViewModelInstance viewModelInstance = this.f17206a;
        String str = this.f17207b;
        String str2 = this.f17208c;
        Job job = this.f17209d;
        return "PropertyListener(instance=" + viewModelInstance + ", path=" + str + ", propertyType=" + str2 + ", job=" + job + ")";
    }
}
