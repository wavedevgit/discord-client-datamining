package com.discord.tti_manager.react;

import com.discord.tti_manager.TTIMetrics;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.properties.a;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u001b\u001a\u00020\u001cJ\u0006\u0010\u001d\u001a\u00020\u001cJ\"\u0010\u001e\u001a\u00020\u001c2\u0006\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\"2\u0006\u0010#\u001a\u00020$H\u0016R+\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR+\u0010\r\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u0010\u0010\f\u001a\u0004\b\u000e\u0010\b\"\u0004\b\u000f\u0010\nR+\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u0014\u0010\f\u001a\u0004\b\u0012\u0010\b\"\u0004\b\u0013\u0010\nR\u001a\u0010\u0015\u001a\u00020\u0016X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\u0018\"\u0004\b\u0019\u0010\u001a¨\u0006%"}, d2 = {"Lcom/discord/tti_manager/react/ReactMarkerListener;", "Lcom/facebook/react/bridge/ReactMarker$MarkerListener;", "<init>", "()V", "<set-?>", "", "bundleStartedTimestamp", "getBundleStartedTimestamp", "()J", "setBundleStartedTimestamp", "(J)V", "bundleStartedTimestamp$delegate", "Lkotlin/properties/ReadWriteProperty;", "bundleLoadedTimestamp", "getBundleLoadedTimestamp", "setBundleLoadedTimestamp", "bundleLoadedTimestamp$delegate", "bundleParsedTimestamp", "getBundleParsedTimestamp", "setBundleParsedTimestamp", "bundleParsedTimestamp$delegate", "stopped", "", "getStopped", "()Z", "setStopped", "(Z)V", ViewProps.START, "", "stop", "logMarker", StackTraceHelper.NAME_KEY, "Lcom/facebook/react/bridge/ReactMarkerConstants;", "tag", "", "instanceKey", "", "tti_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactMarkerListener implements ReactMarker.MarkerListener {
    static final /* synthetic */ KProperty[] $$delegatedProperties = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(ReactMarkerListener.class, "bundleStartedTimestamp", "getBundleStartedTimestamp()J", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(ReactMarkerListener.class, "bundleLoadedTimestamp", "getBundleLoadedTimestamp()J", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(ReactMarkerListener.class, "bundleParsedTimestamp", "getBundleParsedTimestamp()J", 0))};
    @NotNull
    public static final ReactMarkerListener INSTANCE = new ReactMarkerListener();
    @NotNull
    private static final ReadWriteProperty bundleLoadedTimestamp$delegate;
    @NotNull
    private static final ReadWriteProperty bundleParsedTimestamp$delegate;
    @NotNull
    private static final ReadWriteProperty bundleStartedTimestamp$delegate;
    private static boolean stopped;

    static {
        a aVar = a.f33161a;
        bundleStartedTimestamp$delegate = aVar.a();
        bundleLoadedTimestamp$delegate = aVar.a();
        bundleParsedTimestamp$delegate = aVar.a();
        stopped = true;
    }

    private ReactMarkerListener() {
    }

    public final long getBundleLoadedTimestamp() {
        return ((Number) bundleLoadedTimestamp$delegate.getValue(this, $$delegatedProperties[1])).longValue();
    }

    public final long getBundleParsedTimestamp() {
        return ((Number) bundleParsedTimestamp$delegate.getValue(this, $$delegatedProperties[2])).longValue();
    }

    public final long getBundleStartedTimestamp() {
        return ((Number) bundleStartedTimestamp$delegate.getValue(this, $$delegatedProperties[0])).longValue();
    }

    public final boolean getStopped() {
        return stopped;
    }

    @Override // com.facebook.react.bridge.ReactMarker.MarkerListener
    public void logMarker(@NotNull ReactMarkerConstants name, String str, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        long currentTimeMillis = System.currentTimeMillis();
        String name2 = name.name();
        TTIMetrics.INSTANCE.record(name2, currentTimeMillis, str, true);
        switch (name2.hashCode()) {
            case -1775741598:
                if (!name2.equals("REACT_BRIDGELESS_LOADING_START")) {
                    return;
                }
                break;
            case -1048597525:
                if (!name2.equals("PRE_RUN_JS_BUNDLE_START")) {
                    return;
                }
                break;
            case -351240678:
                if (name2.equals("CONTENT_APPEARED")) {
                    stop();
                    return;
                }
                return;
            case 241900896:
                if (name2.equals("RUN_JS_BUNDLE_END")) {
                    setBundleParsedTimestamp(currentTimeMillis);
                    return;
                }
                return;
            case 551634855:
                if (name2.equals("RUN_JS_BUNDLE_START")) {
                    setBundleLoadedTimestamp(currentTimeMillis);
                    return;
                }
                return;
            default:
                return;
        }
        setBundleStartedTimestamp(currentTimeMillis);
        setBundleLoadedTimestamp(currentTimeMillis);
        setBundleParsedTimestamp(currentTimeMillis);
    }

    public final void setBundleLoadedTimestamp(long j10) {
        bundleLoadedTimestamp$delegate.setValue(this, $$delegatedProperties[1], Long.valueOf(j10));
    }

    public final void setBundleParsedTimestamp(long j10) {
        bundleParsedTimestamp$delegate.setValue(this, $$delegatedProperties[2], Long.valueOf(j10));
    }

    public final void setBundleStartedTimestamp(long j10) {
        bundleStartedTimestamp$delegate.setValue(this, $$delegatedProperties[0], Long.valueOf(j10));
    }

    public final void setStopped(boolean z10) {
        stopped = z10;
    }

    public final void start() {
        if (stopped) {
            ReactMarker.addListener(this);
            stopped = false;
        }
    }

    public final void stop() {
        if (!stopped) {
            ReactMarker.removeListener(this);
            stopped = true;
        }
    }
}
