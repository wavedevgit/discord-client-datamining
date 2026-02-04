package com.withpersona.sdk2.inquiry.steps.ui.components;

import aq.k5;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import java.lang.reflect.Constructor;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R \u0010\u001c\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001a0\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0017R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0017R\u001c\u0010\"\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0017R\u001a\u0010%\u001a\b\u0012\u0004\u0012\u00020#0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\u0017R\u001e\u0010)\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010&8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b'\u0010(¨\u0006*"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponentJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "", "Laq/k5;", "c", "listOfUiComponentAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "d", "nullableJsonLogicBooleanAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "e", "nullableClickableStackComponentStyleAdapter", "", "f", "booleanAdapter", "Ljava/lang/reflect/Constructor;", "g", "Ljava/lang/reflect/Constructor;", "constructorRef", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ClickableStackComponentJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19180a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19181b;

    /* renamed from: c  reason: collision with root package name */
    private final h f19182c;

    /* renamed from: d  reason: collision with root package name */
    private final h f19183d;

    /* renamed from: e  reason: collision with root package name */
    private final h f19184e;

    /* renamed from: f  reason: collision with root package name */
    private final h f19185f;

    /* renamed from: g  reason: collision with root package name */
    private volatile Constructor f19186g;

    public ClickableStackComponentJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.NAME_KEY, "children", ViewProps.HIDDEN, "disabled", "styles", "isActive");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19180a = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.NAME_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19181b = f10;
        h f11 = moshi.f(a0.j(List.class, k5.class), x0.d(), "children");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19182c = f11;
        h f12 = moshi.f(JsonLogicBoolean.class, x0.d(), ViewProps.HIDDEN);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.f19183d = f12;
        h f13 = moshi.f(ClickableStack.ClickableStackComponentStyle.class, x0.d(), "styles");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.f19184e = f13;
        h f14 = moshi.f(Boolean.TYPE, x0.d(), "isActive");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.f19185f = f14;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public ClickableStackComponent fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        Boolean bool = Boolean.FALSE;
        reader.r();
        List list = null;
        Boolean bool2 = bool;
        String str = null;
        JsonLogicBoolean jsonLogicBoolean = null;
        ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle = null;
        int i10 = -1;
        JsonLogicBoolean jsonLogicBoolean2 = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.f19180a)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.f19181b.fromJson(reader);
                    if (str != null) {
                        break;
                    } else {
                        throw vm.c.x(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
                    }
                case 1:
                    list = (List) this.f19182c.fromJson(reader);
                    if (list != null) {
                        break;
                    } else {
                        throw vm.c.x("children", "children", reader);
                    }
                case 2:
                    jsonLogicBoolean2 = (JsonLogicBoolean) this.f19183d.fromJson(reader);
                    break;
                case 3:
                    jsonLogicBoolean = (JsonLogicBoolean) this.f19183d.fromJson(reader);
                    break;
                case 4:
                    clickableStackComponentStyle = (ClickableStack.ClickableStackComponentStyle) this.f19184e.fromJson(reader);
                    break;
                case 5:
                    bool2 = (Boolean) this.f19185f.fromJson(reader);
                    if (bool2 != null) {
                        i10 = -33;
                        break;
                    } else {
                        throw vm.c.x("isActive", "isActive", reader);
                    }
            }
        }
        reader.y();
        if (i10 == -33) {
            if (str != null) {
                if (list != null) {
                    return new ClickableStackComponent(str, list, jsonLogicBoolean2, jsonLogicBoolean, clickableStackComponentStyle, bool2.booleanValue());
                }
                throw vm.c.o("children", "children", reader);
            }
            throw vm.c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
        }
        Constructor constructor = this.f19186g;
        if (constructor == null) {
            constructor = ClickableStackComponent.class.getDeclaredConstructor(String.class, List.class, JsonLogicBoolean.class, JsonLogicBoolean.class, ClickableStack.ClickableStackComponentStyle.class, Boolean.TYPE, Integer.TYPE, vm.c.f51688c);
            this.f19186g = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str != null) {
            if (list != null) {
                JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean;
                ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle2 = clickableStackComponentStyle;
                Object newInstance = constructor.newInstance(str, list, jsonLogicBoolean2, jsonLogicBoolean3, clickableStackComponentStyle2, bool2, Integer.valueOf(i10), null);
                Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
                return (ClickableStackComponent) newInstance;
            }
            throw vm.c.o("children", "children", reader);
        }
        throw vm.c.o(StackTraceHelper.NAME_KEY, StackTraceHelper.NAME_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, ClickableStackComponent clickableStackComponent) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (clickableStackComponent != null) {
            writer.l();
            writer.A0(StackTraceHelper.NAME_KEY);
            this.f19181b.toJson(writer, clickableStackComponent.getName());
            writer.A0("children");
            this.f19182c.toJson(writer, clickableStackComponent.getChildren());
            writer.A0(ViewProps.HIDDEN);
            this.f19183d.toJson(writer, clickableStackComponent.getHidden());
            writer.A0("disabled");
            this.f19183d.toJson(writer, clickableStackComponent.getDisabled());
            writer.A0("styles");
            this.f19184e.toJson(writer, clickableStackComponent.c());
            writer.A0("isActive");
            this.f19185f.toJson(writer, Boolean.valueOf(clickableStackComponent.e()));
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(45);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ClickableStackComponent");
        sb2.append(')');
        return sb2.toString();
    }
}
