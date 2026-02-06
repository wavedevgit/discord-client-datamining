package com.facebook.imagepipeline.producers;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e1 extends m8.h {

    /* renamed from: e  reason: collision with root package name */
    private final Consumer f10645e;

    /* renamed from: i  reason: collision with root package name */
    private final y0 f10646i;

    /* renamed from: o  reason: collision with root package name */
    private final ProducerContext f10647o;

    /* renamed from: p  reason: collision with root package name */
    private final String f10648p;

    public e1(Consumer consumer, y0 producerListener, ProducerContext producerContext, String producerName) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(producerListener, "producerListener");
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(producerName, "producerName");
        this.f10645e = consumer;
        this.f10646i = producerListener;
        this.f10647o = producerContext;
        this.f10648p = producerName;
        producerListener.d(producerContext, producerName);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // m8.h
    public void d() {
        Map map;
        y0 y0Var = this.f10646i;
        ProducerContext producerContext = this.f10647o;
        String str = this.f10648p;
        if (y0Var.f(producerContext, str)) {
            map = g();
        } else {
            map = null;
        }
        y0Var.c(producerContext, str, map);
        this.f10645e.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // m8.h
    public void e(Exception e10) {
        Map map;
        Intrinsics.checkNotNullParameter(e10, "e");
        y0 y0Var = this.f10646i;
        ProducerContext producerContext = this.f10647o;
        String str = this.f10648p;
        if (y0Var.f(producerContext, str)) {
            map = h(e10);
        } else {
            map = null;
        }
        y0Var.k(producerContext, str, e10, map);
        this.f10645e.onFailure(e10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // m8.h
    public void f(Object obj) {
        Map map;
        y0 y0Var = this.f10646i;
        ProducerContext producerContext = this.f10647o;
        String str = this.f10648p;
        if (y0Var.f(producerContext, str)) {
            map = i(obj);
        } else {
            map = null;
        }
        y0Var.j(producerContext, str, map);
        this.f10645e.b(obj, 1);
    }

    protected Map g() {
        return null;
    }

    protected Map h(Exception exc) {
        return null;
    }

    protected Map i(Object obj) {
        return null;
    }
}
