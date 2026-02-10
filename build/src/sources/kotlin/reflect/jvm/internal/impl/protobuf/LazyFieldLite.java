package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f33939a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f33940b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f33941c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f33942d;

    protected void a(MessageLite messageLite) {
        if (this.f33942d == null) {
            synchronized (this) {
                if (this.f33942d != null) {
                    return;
                }
                try {
                    if (this.f33939a != null) {
                        this.f33942d = messageLite.getParserForType().parseFrom(this.f33939a, this.f33940b);
                    } else {
                        this.f33942d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f33941c) {
            return this.f33942d.getSerializedSize();
        }
        return this.f33939a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f33942d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f33942d;
        this.f33942d = messageLite;
        this.f33939a = null;
        this.f33941c = true;
        return messageLite2;
    }
}
