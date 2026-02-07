package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f34008a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f34009b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f34010c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f34011d;

    protected void a(MessageLite messageLite) {
        if (this.f34011d == null) {
            synchronized (this) {
                if (this.f34011d != null) {
                    return;
                }
                try {
                    if (this.f34008a != null) {
                        this.f34011d = messageLite.getParserForType().parseFrom(this.f34008a, this.f34009b);
                    } else {
                        this.f34011d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f34010c) {
            return this.f34011d.getSerializedSize();
        }
        return this.f34008a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f34011d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f34011d;
        this.f34011d = messageLite;
        this.f34008a = null;
        this.f34010c = true;
        return messageLite2;
    }
}
